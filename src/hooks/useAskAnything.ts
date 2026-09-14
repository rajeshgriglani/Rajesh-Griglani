import { useState, useCallback } from 'react';
import { AskQuestionResponse } from '../types/ask';
import { askQuestion } from '../api/ask';

export interface AskHistoryItem {
  id: string;
  question: string;
  response: AskQuestionResponse;
  timestamp: string;
}

export function useAskAnything() {
  const [history, setHistory] = useState<AskHistoryItem[]>([]);
  const [currentResponse, setCurrentResponse] = useState<AskQuestionResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const ask = useCallback(async (questionText: string) => {
    if (!questionText.trim()) return null;

    setIsLoading(true);
    setError(null);

    try {
      const res = await askQuestion({ question: questionText.trim() });
      if (res.success && res.data) {
        const item: AskHistoryItem = {
          id: `ask_${Date.now()}`,
          question: questionText.trim(),
          response: res.data,
          timestamp: new Date().toISOString(),
        };

        setCurrentResponse(res.data);
        setHistory((prev) => [item, ...prev]);
        return res.data;
      } else {
        const msg = res.error?.message || 'Unable to retrieve answer. Please try again.';
        setError(msg);
        return null;
      }
    } catch (err: any) {
      const msg = err.message || 'Network error occurred while asking question.';
      setError(msg);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    setCurrentResponse(null);
    setError(null);
  }, []);

  return {
    ask,
    currentResponse,
    history,
    isLoading,
    error,
    clearHistory,
  };
}
