import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import { logger } from './logger';

export type UserRole = 'ADMIN' | 'EDITOR' | 'AUTHOR' | 'VIEWER';

export interface AuthenticatedUser {
  id: string;
  email: string;
  role: UserRole;
  permissions: string[];
}

export interface AuthenticatedRequest extends Request {
  user?: AuthenticatedUser;
}

const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
  ADMIN: [
    'read:content',
    'manage:content',
    'upload:media',
    'delete:media',
    'manage:users',
    'view:audit',
    'view:metrics',
  ],
  EDITOR: ['read:content', 'manage:content', 'upload:media', 'delete:media'],
  AUTHOR: ['read:content', 'manage:content', 'upload:media'],
  VIEWER: ['read:content'],
};

// In-memory revoked tokens store (blacklist for session invalidation/logout)
const revokedTokens = new Set<string>();

// Get or lazily derive server JWT signing secret (never exposed to client)
function getSigningSecret(): string {
  return process.env.JWT_SECRET || process.env.SESSION_SECRET || 'rajesh_griglani_production_server_secret_key_secure_2026';
}

// Generate secure signature for token payload
export function signAuthToken(payload: Omit<AuthenticatedUser, 'permissions'>, expiresInMinutes = 15): string {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const exp = Math.floor(Date.now() / 1000) + expiresInMinutes * 60;
  const body = Buffer.from(
    JSON.stringify({
      ...payload,
      permissions: ROLE_PERMISSIONS[payload.role] || [],
      exp,
      jti: crypto.randomUUID(),
    })
  ).toString('base64url');

  const signature = crypto
    .createHmac('sha256', getSigningSecret())
    .update(`${header}.${body}`)
    .digest('base64url');

  return `${header}.${body}.${signature}`;
}

// Verify token cryptographically
export function verifyAuthToken(token: string): AuthenticatedUser | null {
  if (!token || revokedTokens.has(token)) return null;

  const parts = token.split('.');
  if (parts.length !== 3) return null;

  const [header, body, signature] = parts;
  const expectedSignature = crypto
    .createHmac('sha256', getSigningSecret())
    .update(`${header}.${body}`)
    .digest('base64url');

  if (signature !== expectedSignature) {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf-8'));
    const now = Math.floor(Date.now() / 1000);

    if (payload.exp && payload.exp < now) {
      return null; // Expired
    }

    return {
      id: payload.id,
      email: payload.email,
      role: payload.role,
      permissions: payload.permissions || ROLE_PERMISSIONS[payload.role as UserRole] || [],
    };
  } catch {
    return null;
  }
}

// Invalidate token upon logout
export function revokeAuthToken(token: string): void {
  if (token) {
    revokedTokens.add(token);
  }
}

// Express Middleware: Require Valid Authentication
export function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      data: null,
      error: {
        code: 'UNAUTHORIZED',
        message: 'Authentication required to access this endpoint.',
      },
      meta: { timestamp: new Date().toISOString() },
    });
  }

  const token = authHeader.split(' ')[1];
  const user = verifyAuthToken(token);

  if (!user) {
    logger.warn('Failed authentication attempt', { ip: req.ip, path: req.path });
    return res.status(401).json({
      success: false,
      data: null,
      error: {
        code: 'INVALID_OR_EXPIRED_TOKEN',
        message: 'The session token is invalid or has expired.',
      },
      meta: { timestamp: new Date().toISOString() },
    });
  }

  req.user = user;
  next();
}

// Express Middleware: Require Specific Role
export function requireRole(allowedRoles: UserRole[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: { code: 'UNAUTHORIZED', message: 'Authentication required.' },
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      logger.audit('ROLE_ACCESS_DENIED', req.user.email, 'FAILURE', {
        required: allowedRoles,
        userRole: req.user.role,
        path: req.path,
      });

      return res.status(403).json({
        success: false,
        data: null,
        error: {
          code: 'FORBIDDEN',
          message: 'You do not have the required permissions for this action.',
        },
        meta: { timestamp: new Date().toISOString() },
      });
    }

    next();
  };
}

// Password Strength Validator
export function validatePasswordStrength(password: string): { isValid: boolean; message?: string } {
  if (!password || typeof password !== 'string') {
    return { isValid: false, message: 'Password is required.' };
  }
  if (password.length < 12) {
    return { isValid: false, message: 'Password must be at least 12 characters long.' };
  }
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one uppercase letter.' };
  }
  if (!/[a-z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one lowercase letter.' };
  }
  if (!/[0-9]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number.' };
  }
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one special character.' };
  }
  return { isValid: true };
}
