import React from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Unable to Load Data',
  message = 'An unexpected error occurred while communicating with the data service.',
  onRetry,
}) => {
  return (
    <div className="border border-red-950/60 bg-red-950/20 p-6 rounded-lg text-center space-y-3 max-w-lg mx-auto my-4">
      <div className="w-10 h-10 mx-auto rounded-full bg-red-950/40 border border-red-800/40 flex items-center justify-center text-red-400">
        <AlertCircle size={20} />
      </div>
      <h4 className="text-sm font-semibold tracking-wider uppercase text-red-300">{title}</h4>
      <p className="text-xs text-neutral-400 leading-relaxed">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-200 bg-neutral-900 border border-neutral-700 hover:border-amber-500 transition-colors"
        >
          <RotateCcw size={13} />
          Retry Request
        </button>
      )}
    </div>
  );
};
