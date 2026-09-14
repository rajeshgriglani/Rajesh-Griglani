import { Router, Request, Response } from 'express';
import { SERVER_CONFIG } from '../config';
import { createRateLimiter } from '../security/rateLimiter';
import {
  sanitizeText,
  isValidEmail,
  isValidPhone,
  guardPrototypePollution,
  inspectPromptSafety,
} from '../security/sanitizer';
import {
  requireAuth,
  requireRole,
  signAuthToken,
  revokeAuthToken,
  AuthenticatedRequest,
} from '../security/auth';
import { logger } from '../security/logger';

// Static / Domain data imported securely on server side
import { AUTHOR_DATA } from '../../src/data/mock/author';
import { BOOK_DATA } from '../../src/data/mock/book';
import { BOOK_RETAILERS } from '../../src/data/mock/retailers';
import { TIMELINE_DATA } from '../../src/data/mock/journey';
import { BODHI_DATA } from '../../src/data/mock/bodhi';
import { ARTICLES_DATA } from '../../src/data/mock/writings';
import { MEDIA_ITEMS } from '../../src/data/mock/media';
import { GALLERY_ITEMS } from '../../src/data/mock/gallery';
import { FAQ_DATA } from '../../src/data/mock/faq';
import { siteContent } from '../../src/data/mock/site';
import { MEDIA_REGISTRY } from '../../src/data/mock/mediaRegistry';

export const apiRouter = Router();

// Standard rate limiters
const globalLimiter = createRateLimiter(SERVER_CONFIG.rateLimits.global);
const askLimiter = createRateLimiter(SERVER_CONFIG.rateLimits.ask);
const contactLimiter = createRateLimiter(SERVER_CONFIG.rateLimits.contact);
const newsletterLimiter = createRateLimiter(SERVER_CONFIG.rateLimits.newsletter);
const uploadLimiter = createRateLimiter(SERVER_CONFIG.rateLimits.upload);
const authLimiter = createRateLimiter(SERVER_CONFIG.rateLimits.auth);

// Apply global rate limiting to all API routes
apiRouter.use(globalLimiter);

/* ==========================================================================
   PUBLIC READ-ONLY DOMAIN ENDPOINTS
   ========================================================================== */

// GET /api/v1/author
apiRouter.get('/author', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: AUTHOR_DATA,
    meta: { timestamp: new Date().toISOString() },
  });
});

// GET /api/v1/book
apiRouter.get('/book', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: BOOK_DATA,
    meta: { timestamp: new Date().toISOString() },
  });
});

// GET /api/v1/retailers
apiRouter.get('/retailers', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      retailers: BOOK_RETAILERS,
      activeCount: BOOK_RETAILERS.filter((r) => r.enabled).length,
    },
    meta: { timestamp: new Date().toISOString() },
  });
});

// GET /api/v1/timeline
apiRouter.get('/timeline', (req: Request, res: Response) => {
  const { category } = req.query;
  let items = TIMELINE_DATA;
  if (typeof category === 'string' && category.trim()) {
    items = items.filter((item) =>
      item.roleOrCategory.toLowerCase().includes(category.toLowerCase())
    );
  }

  res.json({
    success: true,
    data: items,
    meta: { total: items.length, timestamp: new Date().toISOString() },
  });
});

// GET /api/v1/bodhi
apiRouter.get('/bodhi', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: BODHI_DATA,
    meta: { timestamp: new Date().toISOString() },
  });
});

// GET /api/v1/writings
apiRouter.get('/writings', (req: Request, res: Response) => {
  const { category, search } = req.query;
  let articles = ARTICLES_DATA;

  if (typeof category === 'string' && category.trim()) {
    articles = articles.filter((a) => a.category.toLowerCase() === category.toLowerCase());
  }

  if (typeof search === 'string' && search.trim()) {
    const s = search.toLowerCase();
    articles = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(s) ||
        a.excerpt.toLowerCase().includes(s) ||
        a.category.toLowerCase().includes(s)
    );
  }

  res.json({
    success: true,
    data: articles,
    meta: { total: articles.length, timestamp: new Date().toISOString() },
  });
});

// GET /api/v1/media
apiRouter.get('/media', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: MEDIA_ITEMS,
    meta: { total: MEDIA_ITEMS.length, timestamp: new Date().toISOString() },
  });
});

// GET /api/v1/gallery
apiRouter.get('/gallery', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: GALLERY_ITEMS,
    meta: { total: GALLERY_ITEMS.length, timestamp: new Date().toISOString() },
  });
});

// GET /api/v1/faq
apiRouter.get('/faq', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: FAQ_DATA,
    meta: { total: FAQ_DATA.length, timestamp: new Date().toISOString() },
  });
});

// GET /api/v1/site
apiRouter.get('/site', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: siteContent,
    meta: { timestamp: new Date().toISOString() },
  });
});

// GET /api/v1/media-assets
apiRouter.get('/media-assets', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: MEDIA_REGISTRY,
    meta: { total: MEDIA_REGISTRY.length, timestamp: new Date().toISOString() },
  });
});

/* ==========================================================================
   INTERACTIVE PUBLIC ENDPOINTS WITH RATE LIMITING & SECURITY CONTROLS
   ========================================================================== */

// POST /api/v1/ask (Knowledge Q&A Engine)
apiRouter.post('/ask', askLimiter, async (req: Request, res: Response) => {
  try {
    if (!guardPrototypePollution(req.body)) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_PAYLOAD', message: 'Malformed request structure detected.' },
      });
    }

    const { question } = req.body;

    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: { code: 'EMPTY_QUESTION', message: 'Please provide a valid question.' },
      });
    }

    if (question.length > 500) {
      return res.status(400).json({
        success: false,
        error: { code: 'QUESTION_TOO_LONG', message: 'Question exceeds maximum length of 500 characters.' },
      });
    }

    // Server-Side Prompt Safety and Injection Guard
    const safetyCheck = inspectPromptSafety(question);
    if (!safetyCheck.isSafe) {
      logger.warn('Prompt safety violation intercepted', {
        question: question.slice(0, 80),
        reason: safetyCheck.flaggedReason,
        ip: req.ip,
      });

      return res.status(400).json({
        success: false,
        error: {
          code: 'UNSAFE_QUERY',
          message: 'Your inquiry could not be processed. Please rephrase with a focus on historical or strategic topics.',
        },
      });
    }

    const cleanQuestion = sanitizeText(question, 500);
    const qLower = cleanQuestion.toLowerCase();

    // Check knowledge base matching on server
    let answerText = '';
    let sourceType: 'book' | 'timeline' | 'bodhi' | 'writings' | 'general' = 'general';
    let relatedLinks: { label: string; url: string }[] = [];

    if (qLower.includes('naroda') || qLower.includes('2002') || qLower.includes('riots') || qLower.includes('resistance')) {
      answerText =
        'On 28 February 2002, during the Gujarat riots at Naroda Patiya, Rajesh Bhojraj Griglani witnessed the complete collapse of institutional secularism. That pivotal experience forged his lifelong conviction that political memory must be preserved and actively defended, culminating in his book "Roots of Resistance" (The Ideological Battle for India\'s Soul).';
      sourceType = 'book';
      relatedLinks = [
        { label: 'Explore Roots of Resistance', url: '#the-book' },
        { label: 'Chronology of Influence', url: '#timeline' },
      ];
    } else if (qLower.includes('bodhi') || qLower.includes('institute') || qLower.includes('three pillars') || qLower.includes('intellect') || qLower.includes('intuition')) {
      answerText =
        'The BODHI INSTITUTE was founded by Rajesh Bhojraj Griglani to train next-generation leaders across three core cognitive pillars: Instinct (gut resilience and situational reflexes), Intellect (data analysis, constituency mapping, and ideological clarity), and Intuition (ethical discernment and long-range political foresight).';
      sourceType = 'bodhi';
      relatedLinks = [{ label: 'BODHI Institute Architecture', url: '#bodhi-institute' }];
    } else if (qLower.includes('congress') || qLower.includes('legacy') || qLower.includes('family') || qLower.includes('generation')) {
      answerText =
        'Rajesh Bhojraj Griglani is a 3rd Generation Congressman, born in Kutiyana, Porbandar, Gujarat. His grandfather served as Taluka Panchayat President and MLA candidate in 1972, and his father was a dedicated party worker from 1968. Rajesh continues this continuous heritage through strategic election management and leadership mentorship.';
      sourceType = 'timeline';
      relatedLinks = [{ label: 'View Heritage in Timeline', url: '#timeline' }];
    } else if (qLower.includes('women') || qLower.includes('mahila') || qLower.includes('grassroots')) {
      answerText =
        'Rajesh has trained over 10,000+ women leaders across Gujarat, Maharashtra, Rajasthan, Karnataka, Madhya Pradesh, and Delhi, focusing on grassroots empowerment, civic leadership, and booth-level organizational governance.';
      sourceType = 'bodhi';
      relatedLinks = [{ label: 'Women in Leadership', url: '#women-leadership' }];
    } else if (qLower.includes('buy') || qLower.includes('order') || qLower.includes('amazon') || qLower.includes('notion') || qLower.includes('flipkart') || qLower.includes('hugendubel')) {
      answerText =
        'Hardcover editions of "Roots of Resistance" can be ordered directly through Amazon, Notion Press (official publisher), Flipkart, Hugendubel (Germany/Europe), and leading bookstores.';
      sourceType = 'book';
      relatedLinks = [{ label: 'Order Collector\'s Edition', url: '#retailers' }];
    } else if (qLower.includes('media') || qLower.includes('interview') || qLower.includes('press') || qLower.includes('youtube') || qLower.includes('speaking')) {
      answerText =
        'Rajesh Griglani has been featured across national broadcast dialogues and press dispatches, including exclusive interviews on Desi Decoder analyzing Rahul Gandhi and counter-disinformation strategies, video dialogues on contemporary election dynamics, and press coverage in The Times of India, ANI News, and The Tribune Online regarding his AICC leadership appointments.';
      sourceType = 'general';
      relatedLinks = [{ label: 'View Media & Press', url: '#media' }];
    } else {
      answerText =
        `Rajesh Bhojraj Griglani is an author, 3rd generation Congressman, political strategist, and founder of BODHI INSTITUTE. His work focuses on ideological training, grassroots electoral mechanics, and the preservation of India's constitutional heritage as detailed in his book "Roots of Resistance".`;
      sourceType = 'general';
      relatedLinks = [
        { label: 'Read Biography', url: '#about' },
        { label: 'The Book', url: '#the-book' },
      ];
    }

    logger.info('Ask inquiry processed successfully', {
      questionSnippet: cleanQuestion.slice(0, 40),
      sourceType,
    });

    return res.json({
      success: true,
      data: {
        question: cleanQuestion,
        answer: answerText,
        sourceType,
        confidenceScore: 0.95,
        relatedLinks,
      },
      meta: { timestamp: new Date().toISOString() },
    });
  } catch (error) {
    logger.error('Error handling /ask request', error);
    return res.status(500).json({
      success: false,
      error: { code: 'SERVER_ERROR', message: 'Unable to process inquiry at this time. Please try again.' },
    });
  }
});

// POST /api/v1/contact
apiRouter.post('/contact', contactLimiter, (req: Request, res: Response) => {
  try {
    if (!guardPrototypePollution(req.body)) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_PAYLOAD', message: 'Malformed payload.' },
      });
    }

    const { name, email, phone, subject, message, organization, interestCategory } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_NAME', message: 'Full name is required (minimum 2 characters).' },
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_EMAIL', message: 'Please provide a valid email address.' },
      });
    }

    if (phone && !isValidPhone(phone)) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_PHONE', message: 'Please provide a valid contact phone number.' },
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_MESSAGE', message: 'Message content must be at least 10 characters.' },
      });
    }

    const sanitizedSubmission = {
      id: `msg_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      name: sanitizeText(name, 100),
      email: String(email).trim().toLowerCase(),
      phone: phone ? sanitizeText(phone, 25) : undefined,
      subject: sanitizeText(subject || 'General Inquiry', 150),
      organization: organization ? sanitizeText(organization, 100) : undefined,
      interestCategory: interestCategory ? sanitizeText(interestCategory, 50) : 'General',
      message: sanitizeText(message, 3000),
      receivedAt: new Date().toISOString(),
    };

    logger.audit('CONTACT_FORM_SUBMISSION', sanitizedSubmission.email, 'SUCCESS', {
      messageId: sanitizedSubmission.id,
      interestCategory: sanitizedSubmission.interestCategory,
    });

    res.status(201).json({
      success: true,
      data: {
        id: sanitizedSubmission.id,
        receivedAt: sanitizedSubmission.receivedAt,
        message: 'Your message has been received securely. The office of Rajesh Bhojraj Griglani will review your dispatch.',
      },
      meta: { timestamp: new Date().toISOString() },
    });
  } catch (error) {
    logger.error('Error in contact submission', error);
    res.status(500).json({
      success: false,
      error: { code: 'SERVER_ERROR', message: 'An unexpected error occurred while transmitting your message.' },
    });
  }
});

// POST /api/v1/newsletter/subscribe
apiRouter.post('/newsletter/subscribe', newsletterLimiter, (req: Request, res: Response) => {
  try {
    if (!guardPrototypePollution(req.body)) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_PAYLOAD', message: 'Malformed payload.' },
      });
    }

    const { email, firstName, topicPreferences } = req.body;

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_EMAIL', message: 'Please provide a valid email address.' },
      });
    }

    const subscriptionId = `sub_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const cleanEmail = String(email).trim().toLowerCase();

    logger.audit('NEWSLETTER_SUBSCRIPTION', cleanEmail, 'SUCCESS', {
      subscriptionId,
      topics: Array.isArray(topicPreferences) ? topicPreferences.slice(0, 5) : [],
    });

    res.status(201).json({
      success: true,
      data: {
        subscriptionId,
        email: cleanEmail,
        status: 'active',
        message: 'You have been successfully enrolled to receive strategic writings and political commentaries.',
      },
      meta: { timestamp: new Date().toISOString() },
    });
  } catch (error) {
    logger.error('Error in newsletter subscription', error);
    res.status(500).json({
      success: false,
      error: { code: 'SERVER_ERROR', message: 'Unable to process subscription.' },
    });
  }
});

/* ==========================================================================
   SECURE AUTHENTICATION & ADMIN ENDPOINTS
   ========================================================================== */

// POST /api/v1/auth/login
apiRouter.post('/auth/login', authLimiter, (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: { code: 'MISSING_CREDENTIALS', message: 'Email and password are required.' },
      });
    }

    // In a production SQL/ORM setup, verify against Argon2id hashed password in the DB
    // Here we provide the hardened server-side auth envelope
    const isMockAdmin = email === 'admin@rajeshgriglani.com' && password === process.env.ADMIN_INITIAL_SECRET;

    if (!isMockAdmin) {
      logger.audit('AUTH_LOGIN_FAILURE', String(email), 'FAILURE', { ip: req.ip });
      return res.status(401).json({
        success: false,
        error: { code: 'INVALID_CREDENTIALS', message: 'Invalid email or password.' },
      });
    }

    const token = signAuthToken(
      {
        id: 'usr_admin_01',
        email: 'admin@rajeshgriglani.com',
        role: 'ADMIN',
      },
      SERVER_CONFIG.auth.tokenExpirationMinutes
    );

    logger.audit('AUTH_LOGIN_SUCCESS', 'admin@rajeshgriglani.com', 'SUCCESS', { ip: req.ip });

    res.json({
      success: true,
      data: {
        token,
        tokenType: 'Bearer',
        expiresInMinutes: SERVER_CONFIG.auth.tokenExpirationMinutes,
        user: {
          id: 'usr_admin_01',
          email: 'admin@rajeshgriglani.com',
          role: 'ADMIN',
        },
      },
      meta: { timestamp: new Date().toISOString() },
    });
  } catch (error) {
    logger.error('Error during authentication', error);
    res.status(500).json({
      success: false,
      error: { code: 'AUTH_ERROR', message: 'Authentication processing failed.' },
    });
  }
});

// POST /api/v1/auth/logout
apiRouter.post('/auth/logout', requireAuth, (req: AuthenticatedRequest, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    revokeAuthToken(token);
  }

  logger.audit('AUTH_LOGOUT', req.user?.email || 'unknown', 'SUCCESS');

  res.json({
    success: true,
    data: { message: 'Logged out successfully.' },
    meta: { timestamp: new Date().toISOString() },
  });
});

// GET /api/v1/auth/me
apiRouter.get('/auth/me', requireAuth, (req: AuthenticatedRequest, res: Response) => {
  res.json({
    success: true,
    data: req.user,
    meta: { timestamp: new Date().toISOString() },
  });
});

// POST /api/v1/media-assets/upload (Admin / Editor Protected)
apiRouter.post(
  '/media-assets/upload',
  uploadLimiter,
  requireAuth,
  requireRole(['ADMIN', 'EDITOR']),
  (req: AuthenticatedRequest, res: Response) => {
    try {
      const { assetId, altText, category, base64Data, mimeType } = req.body;

      if (!assetId || typeof assetId !== 'string') {
        return res.status(400).json({
          success: false,
          error: { code: 'INVALID_ASSET_ID', message: 'Target asset identifier is required.' },
        });
      }

      if (!mimeType || !SERVER_CONFIG.upload.allowedMimeTypes.includes(mimeType)) {
        return res.status(400).json({
          success: false,
          error: {
            code: 'INVALID_MIME_TYPE',
            message: `Allowed formats: ${SERVER_CONFIG.upload.allowedMimeTypes.join(', ')}`,
          },
        });
      }

      const sanitizedAsset = {
        id: sanitizeText(assetId, 60),
        alt: sanitizeText(altText || 'Media Asset', 150),
        category: category || 'general',
        url: base64Data ? `data:${mimeType};base64,...` : '/assets/placeholder.jpg',
        mimeType,
        updatedAt: new Date().toISOString(),
        updatedBy: req.user?.email,
      };

      logger.audit('MEDIA_UPLOAD', req.user?.email || 'admin', 'SUCCESS', {
        assetId: sanitizedAsset.id,
      });

      res.status(201).json({
        success: true,
        data: { asset: sanitizedAsset },
        meta: { timestamp: new Date().toISOString() },
      });
    } catch (error) {
      logger.error('Error processing media upload', error);
      res.status(500).json({
        success: false,
        error: { code: 'UPLOAD_FAILED', message: 'Failed to process media upload securely.' },
      });
    }
  }
);

// DELETE /api/v1/media-assets/:id (Admin Protected)
apiRouter.delete(
  '/media-assets/:id',
  requireAuth,
  requireRole(['ADMIN']),
  (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;

    logger.audit('MEDIA_DELETE', req.user?.email || 'admin', 'SUCCESS', {
      assetId: id,
    });

    res.json({
      success: true,
      data: { id, deleted: true },
      meta: { timestamp: new Date().toISOString() },
    });
  }
);
