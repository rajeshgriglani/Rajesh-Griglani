/**
 * Security Sanitization and Input Validation Suite
 */

// Escape HTML special characters to neutralize XSS vectors
export function escapeHtml(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Clean and trim text input
export function sanitizeText(str: unknown, maxLength = 2000): string {
  if (typeof str !== 'string') return '';
  const trimmed = str.trim().slice(0, maxLength);
  return escapeHtml(trimmed);
}

// Email format validator
export function isValidEmail(email: unknown): boolean {
  if (typeof email !== 'string') return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return email.length <= 254 && emailRegex.test(email.trim());
}

// Phone format validator (optional field)
export function isValidPhone(phone: unknown): boolean {
  if (!phone) return true;
  if (typeof phone !== 'string') return false;
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,20}$/;
  return phoneRegex.test(phone.trim());
}

// Prototype pollution guard
export function guardPrototypePollution(obj: any): boolean {
  if (!obj || typeof obj !== 'object') return true;
  const disallowed = ['__proto__', 'constructor', 'prototype'];

  for (const key of Object.keys(obj)) {
    if (disallowed.includes(key)) {
      return false;
    }
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      if (!guardPrototypePollution(obj[key])) {
        return false;
      }
    }
  }
  return true;
}

// Prompt Injection & System Leak Guard for AI Q&A
export function inspectPromptSafety(input: string): { isSafe: boolean; flaggedReason?: string } {
  const normalized = input.toLowerCase();

  // Pattern detection for prompt extraction or credential tampering attempts
  const suspiciousPatterns = [
    /ignore previous instructions/i,
    /disregard all previous/i,
    /system prompt/i,
    /api[-_ ]?key/i,
    /reveal.*secret/i,
    /database.*password/i,
    /gemini_api_key/i,
    /env\.process/i,
    /process\.env/i,
    /print\s+config/i,
    /<script[\s\S]*?>/i,
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(normalized)) {
      return {
        isSafe: false,
        flaggedReason: 'Query contains restricted patterns or system prompt manipulation keywords.',
      };
    }
  }

  return { isSafe: true };
}
