import { Request, Response, NextFunction } from 'express';
import { SERVER_CONFIG } from '../config';

export function corsMiddleware(req: Request, res: Response, next: NextFunction) {
  const origin = req.headers.origin;

  if (origin) {
    const isAllowed =
      SERVER_CONFIG.allowedOrigins.includes(origin) ||
      !SERVER_CONFIG.isProduction ||
      origin.endsWith('.run.app') ||
      origin.endsWith('.rajeshgriglani.com');

    if (isAllowed) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, X-Requested-With, Accept, Origin'
      );
      res.setHeader('Access-Control-Max-Age', '86400');
    }
  }

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  next();
}
