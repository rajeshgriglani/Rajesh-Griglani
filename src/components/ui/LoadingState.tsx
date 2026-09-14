import React from 'react';

interface LoadingStateProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading content...',
  size = 'md',
}) => {
  const spinnerSize = size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-10 h-10' : 'w-7 h-7';

  return (
    <div className="flex flex-col items-center justify-center p-8 text-neutral-400 space-y-3">
      <div
        className={`${spinnerSize} border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin`}
      />
      {message && <p className="text-xs uppercase tracking-widest text-neutral-500">{message}</p>}
    </div>
  );
};
