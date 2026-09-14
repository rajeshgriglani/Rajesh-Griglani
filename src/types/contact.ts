export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  reason: string;
  message: string;
  token?: string; // spam protection / captcha token
}

export interface ContactResponse {
  referenceId: string;
  receivedAt: string;
  status: 'received' | 'pending';
}
