export const SERVER_CONFIG = {
  port: Number(process.env.PORT) || 3000,
  host: '0.0.0.0',
  isProduction: process.env.NODE_ENV === 'production',
  appUrl: process.env.APP_URL || 'http://localhost:3000',
  allowedOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'https://rajeshgriglani.com',
    'https://www.rajeshgriglani.com',
    process.env.APP_URL,
  ].filter(Boolean) as string[],
  rateLimits: {
    global: { windowMs: 60 * 1000, max: 120 }, // 120 req/min
    ask: { windowMs: 60 * 1000, max: 15 }, // 15 questions/min per IP
    contact: { windowMs: 60 * 60 * 1000, max: 5 }, // 5 contact submissions/hr per IP
    newsletter: { windowMs: 60 * 60 * 1000, max: 5 }, // 5 subscriptions/hr per IP
    upload: { windowMs: 60 * 60 * 1000, max: 10 }, // 10 uploads/hr per IP
    auth: { windowMs: 15 * 60 * 1000, max: 5 }, // 5 login attempts/15min per IP
  },
  upload: {
    maxSizeBytes: 5 * 1024 * 1024, // 5MB max
    allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
    allowedExtensions: ['.jpg', '.jpeg', '.png', '.webp'],
  },
  auth: {
    tokenExpirationMinutes: 15,
    refreshTokenExpirationDays: 7,
  },
};
