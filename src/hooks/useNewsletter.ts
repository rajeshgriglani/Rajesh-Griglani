import { useState, useCallback } from 'react';
import { NewsletterSubscription, NewsletterResponse } from '../types/newsletter';
import { subscribeNewsletter } from '../api/newsletter';

export function useNewsletter() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [result, setResult] = useState<NewsletterResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const subscribe = useCallback(async (data: NewsletterSubscription) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await subscribeNewsletter(data);
      if (res.success && res.data) {
        setResult(res.data);
        return res.data;
      } else {
        const msg = res.error?.message || 'Failed to subscribe to newsletter.';
        setError(msg);
        return null;
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
      return null;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const reset = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return { subscribe, isSubmitting, result, error, reset };
}
