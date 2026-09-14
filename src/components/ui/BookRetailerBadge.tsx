import React from 'react';
import { ShoppingCart, BookOpen, ExternalLink, MapPin, Globe } from 'lucide-react';
import { BookRetailerItem } from '../../types/retailer';

interface BookRetailerBadgeProps {
  retailer: BookRetailerItem;
  variant?: 'primary' | 'secondary' | 'card' | 'compact';
  className?: string;
  onClick?: () => void;
}

export const BookRetailerBadge: React.FC<BookRetailerBadgeProps> = ({
  retailer,
  variant = 'secondary',
  className = '',
  onClick,
}) => {
  const getIcon = () => {
    switch (retailer.id.toLowerCase()) {
      case 'amazon':
        return <ShoppingCart size={15} className="text-amber-400" />;
      case 'notionpress':
        return <BookOpen size={15} className="text-amber-400" />;
      case 'hugendubel':
        return <Globe size={15} className="text-amber-400" />;
      case 'crossword':
        return <MapPin size={15} className="text-amber-400" />;
      default:
        return <ExternalLink size={15} className="text-amber-400" />;
    }
  };

  if (variant === 'card') {
    return (
      <a
        href={retailer.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`group p-4 bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/60 rounded transition-all duration-300 flex flex-col justify-between ${className}`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {getIcon()}
            <span className="font-serif font-bold text-white text-base group-hover:text-amber-400 transition-colors">
              {retailer.name}
            </span>
          </div>
          {retailer.badge && (
            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded">
              {retailer.badge}
            </span>
          )}
        </div>
        <p className="text-xs text-neutral-400 mb-4 line-clamp-2">{retailer.description}</p>
        <div className="flex items-center text-xs font-semibold uppercase tracking-widest text-amber-400 group-hover:translate-x-1 transition-transform">
          Order Online →
        </div>
      </a>
    );
  }

  if (variant === 'compact') {
    return (
      <a
        href={retailer.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-neutral-900 border border-neutral-700 hover:border-amber-500 text-neutral-200 hover:text-amber-300 rounded transition-all ${className}`}
      >
        {getIcon()}
        <span>{retailer.name}</span>
      </a>
    );
  }

  const baseClasses =
    variant === 'primary'
      ? 'bg-amber-600 hover:bg-amber-500 text-neutral-950 font-bold border-amber-500'
      : 'bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border-neutral-700 hover:border-amber-500/50';

  return (
    <a
      href={retailer.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest border transition-all duration-300 ${baseClasses} ${className}`}
    >
      {getIcon()}
      <span>{retailer.name}</span>
    </a>
  );
};
