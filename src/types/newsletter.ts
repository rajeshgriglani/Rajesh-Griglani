export interface NewsletterSubscription {
  name?: string;
  email: string;
  source?: string;
}

export interface NewsletterResponse {
  subscriptionId: string;
  status: 'subscribed' | 'already_subscribed';
  subscribedAt: string;
}
