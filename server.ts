import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { SERVER_CONFIG } from './server/config';
import { securityHeadersMiddleware } from './server/security/headers';
import { corsMiddleware } from './server/security/cors';
import { logger } from './server/security/logger';
import { apiRouter } from './server/routes/api';

async function startServer() {
  const app = express();
  const PORT = SERVER_CONFIG.port;
  const HOST = SERVER_CONFIG.host;

  // Security Middleware
  app.use(securityHeadersMiddleware);
  app.use(corsMiddleware);

  // Request Body Parsers with Strict Size Limits
  app.use(express.json({ limit: '200kb' }));
  app.use(express.urlencoded({ extended: true, limit: '200kb' }));

  // API Health Check
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
    });
  });

  // Mount API Endpoints under /api/v1 and alias /api
  app.use('/api/v1', apiRouter);
  app.use('/api', apiRouter);

  // Global Centralized Error Handling Middleware (Zero Secret/Stack Trace Leakage)
  app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    logger.error('Unhandled server exception intercepted', err, {
      method: req.method,
      path: req.path,
      ip: req.ip,
    });

    // Handle JSON syntax/parser errors cleanly
    if (err.type === 'entity.parse.failed' || err instanceof SyntaxError) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'BAD_REQUEST',
          message: 'The request body contains invalid JSON format.',
        },
      });
    }

    // Return sanitized response without internal stack trace or filesystem paths
    return res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'A secure server error occurred. Please try again later.',
      },
      meta: {
        timestamp: new Date().toISOString(),
      },
    });
  });

  // Vite Middleware in Development vs. Static File Serving in Production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, {
      maxAge: '1d',
      setHeaders: (res, filePath) => {
        // Cache immutable hashed assets for 1 year, HTML for 0s
        if (filePath.endsWith('.html')) {
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        } else if (filePath.match(/\.[0-9a-f]{8}\./)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
      },
    }));

    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, HOST, () => {
    logger.info(`Secure Server initialized and listening on http://${HOST}:${PORT}`);
  });
}

startServer().catch((error) => {
  logger.error('Fatal server boot failure', error);
  process.exit(1);
});
