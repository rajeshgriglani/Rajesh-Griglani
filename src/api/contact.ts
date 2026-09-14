import { request } from './client';
import { ContactSubmission, ContactResponse } from '../types/contact';
import { ApiResponse } from '../types/api';

export const submitContactForm = async (
  payload: ContactSubmission
): Promise<ApiResponse<ContactResponse>> => {
  return request<ContactResponse>(
    '/contact',
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
    () => {
      // Validate inputs
      if (!payload.name || !payload.email || !payload.message) {
        throw new Error('Name, email, and message are required.');
      }

      return {
        referenceId: `REF-${Date.now().toString(36).toUpperCase()}`,
        receivedAt: new Date().toISOString(),
        status: 'received',
      };
    }
  );
};
