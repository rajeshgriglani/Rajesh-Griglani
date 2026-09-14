import { request } from './client';
import { NewsletterSubscription, NewsletterResponse } from '../types/newsletter';
import { ApiResponse } from '../types/api';

export const subscribeNewsletter = async (
  payload: NewsletterSubscription
): Promise<ApiResponse<NewsletterResponse>> => {
  return request<NewsletterResponse>(
    '/newsletter/subscribe',
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
    () => {
      if (!payload.email || !payload.email.includes('@')) {
        throw new Error('Please provide a valid email address.');
      }

      return {
        subscriptionId: `SUB-${Date.now().toString(36).toUpperCase()}`,
        status: 'subscribed',
        subscribedAt: new Date().toISOString(),
      };
    }
  );
};
