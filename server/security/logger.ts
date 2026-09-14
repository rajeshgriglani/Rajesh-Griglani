/**
 * Server-Side Security Audit Logger
 * Ensures zero secret leakage in logs.
 */

const REDACTED_KEYS = [
  'password',
  'token',
  'authorization',
  'key',
  'secret',
  'api_key',
  'gemini_api_key',
  'cookie',
  'jwt',
];

export function redactSensitiveData(data: any): any {
  if (!data || typeof data !== 'object') {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map(redactSensitiveData);
  }

  const sanitized: Record<string, any> = {};
  for (const [key, value] of Object.entries(data)) {
    const isSensitive = REDACTED_KEYS.some((rk) => key.toLowerCase().includes(rk));
    if (isSensitive) {
      sanitized[key] = '[REDACTED]';
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = redactSensitiveData(value);
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
}

export const logger = {
  info: (message: string, meta: Record<string, any> = {}) => {
    console.log(
      JSON.stringify({
        level: 'INFO',
        timestamp: new Date().toISOString(),
        message,
        ...redactSensitiveData(meta),
      })
    );
  },
  warn: (message: string, meta: Record<string, any> = {}) => {
    console.warn(
      JSON.stringify({
        level: 'WARN',
        timestamp: new Date().toISOString(),
        message,
        ...redactSensitiveData(meta),
      })
    );
  },
  error: (message: string, error?: any, meta: Record<string, any> = {}) => {
    console.error(
      JSON.stringify({
        level: 'ERROR',
        timestamp: new Date().toISOString(),
        message,
        error: error?.message || String(error),
        ...redactSensitiveData(meta),
      })
    );
  },
  audit: (action: string, actor: string, status: 'SUCCESS' | 'FAILURE', details: Record<string, any> = {}) => {
    console.log(
      JSON.stringify({
        level: 'AUDIT',
        timestamp: new Date().toISOString(),
        action,
        actor,
        status,
        details: redactSensitiveData(details),
      })
    );
  },
};
