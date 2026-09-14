import { useState, useCallback } from 'react';
import { ContactSubmission, ContactResponse } from '../types/contact';
import { submitContactForm } from '../api/contact';

export function useContact() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [result, setResult] = useState<ContactResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(async (formData: ContactSubmission) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await submitContactForm(formData);
      if (res.success && res.data) {
        setResult(res.data);
        return res.data;
      } else {
        const msg = res.error?.message || 'Failed to submit contact message.';
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

  return { submit, isSubmitting, result, error, reset };
}
