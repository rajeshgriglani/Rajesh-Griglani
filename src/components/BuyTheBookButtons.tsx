import React from 'react';
import { ShoppingBag, ExternalLink, BookOpen, Check } from 'lucide-react';
import { BookLinksConfig, RetailerLink } from '../data/config';

interface BuyTheBookButtonsProps {
  bookLinks: BookLinksConfig;
  variant?: 'horizontal' | 'grid' | 'compact' | 'pill';
  onOpenAdmin?: () => void;
  showCustomTitle?: boolean;
}

export const BuyTheBookButtons: React.FC<BuyTheBookButtonsProps> = ({
  bookLinks,
  variant = 'horizontal',
  showCustomTitle = false,
}) => {
  const allRetailers: RetailerLink[] = [
    bookLinks.notionPress,
    bookLinks.amazon,
    bookLinks.flipkart,
    ...(bookLinks.hugendubel ? [bookLinks.hugendubel] : []),
    ...(bookLinks.otherRetailers || []).filter(
      (r) => !['amazon', 'notionpress', 'flipkart', 'hugendubel'].includes(r.id.toLowerCase())
    ),
  ].filter((r) => r && r.enabled);

  const getRetailerIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('amazon')) {
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M13.9 14.8c-2.3 1.7-5.7 2.6-8.6 2.6-4.1 0-7.8-1.5-10.6-4.1-.2-.2 0-.5.3-.4 3.1 1.8 6.9 2.8 10.7 2.8 2.5 0 5.4-.6 8-1.7.4-.2.6.3.2.8zm1.4-1.2c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.2-.1-.3 1.2-.8 3.1-.6 3.4-.2.2.4.2 2.3-.9 3.2-.2.1-.3 0-.3-.2.2-.6.7-2 .5-2.4zm5.8 4.2c-1.4 1.7-3.4 3-5.6 3.7-.4.1-.7-.2-.4-.5 1.7-.8 3.2-1.9 4.3-3.3.3-.4.8-.1.7.3zM15.4 6.7c.3.5.7 1.3.7 2.3 0 2.4-1.3 3.8-3.3 3.8-1 0-1.8-.5-2.2-1.2l-.2.9h-1.9V4.6h1.9v3.4c.4-.7 1.2-1.2 2.2-1.2 1.9 0 2.8 1.4 2.8 3.3v-3.4h0zm-2 2.3c0-1.3-.5-2-1.4-2s-1.5.8-1.5 2 .6 2 1.5 2 1.4-.7 1.4-2z"/>
        </svg>
      );
    }
    if (lower.includes('notion')) {
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.84-.046.933-.56.933-1.167V6.354c0-.606-.233-.933-.746-.887l-15.176.887c-.56.046-.748.373-.748.934zm13.498.467c.094.42 0 .84-.42.887l-.98.187v10.452c-.607.327-1.168.514-1.635.514-.747 0-1.027-.233-1.634-.98l-4.76-7.466v7.326l1.4.327c.093.047.14.373 0 .42l-3.874.233c-.093 0-.14-.28 0-.327l1.073-.28V8.647l-1.447-.14c-.093-.047 0-.374.14-.374l3.968-.233 4.993 7.653V8.787l-1.213-.187c-.094-.047 0-.373.14-.373l3.874-.234c.093 0 .14.28.093.42z"/>
        </svg>
      );
    }
    if (lower.includes('flipkart')) {
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M17.72 8.35h-3.08V5.62c0-1.13-.88-2.05-1.97-2.05h-.05c-1.09 0-1.97.92-1.97 2.05v2.73H7.57a.5.5 0 0 0-.5.5v1.27c0 .28.22.5.5.5h3.08v6.9c0 1.6 1.25 2.91 2.8 2.91h.05c1.55 0 2.8-1.31 2.8-2.91v-6.9h1.42a.5.5 0 0 0 .5-.5V8.85a.5.5 0 0 0-.5-.5z"/>
        </svg>
      );
    }
    if (lower.includes('hugendubel')) {
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      );
    }
    return <BookOpen className="w-4 h-4" />;
  };

  if (variant === 'grid') {
    return (
      <div className="w-full space-y-3">
        {showCustomTitle && (
          <div className="text-xs uppercase tracking-widest text-[#c8a96e] font-medium mb-2">
            Available on Official Book Retailers
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {allRetailers.map((retailer) => (
            <a
              key={retailer.id}
              href={retailer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 rounded-lg bg-[#14161b] hover:bg-[#1c1f26] border border-[#2a2d36] hover:border-[#c8a96e]/50 transition-all duration-200 shadow-md"
              id={`retailer-btn-${retailer.id}`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-md bg-[#1f222a] group-hover:bg-[#c8a96e]/10 text-[#c8a96e] flex items-center justify-center transition-colors">
                  {getRetailerIcon(retailer.name)}
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm text-[#f5f2eb] group-hover:text-[#c8a96e] transition-colors flex items-center gap-1.5">
                    {retailer.name}
                    {retailer.badge && (
                      <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#272a33] text-[#a49a88] border border-[#393d48]">
                        {retailer.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#8f887b] line-clamp-1 mt-0.5">
                    {retailer.description}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#757065] group-hover:text-[#c8a96e] transition-colors ml-2 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap gap-2.5 items-center">
        {allRetailers.map((retailer) => (
          <a
            key={retailer.id}
            href={retailer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-md bg-[#16181f] hover:bg-[#20232c] border border-[#2b2f3a] hover:border-[#c8a96e]/50 text-xs font-medium text-[#e4decb] hover:text-[#f8f5ee] transition-all"
            id={`retailer-compact-${retailer.id}`}
          >
            <span className="text-[#c8a96e]">{getRetailerIcon(retailer.name)}</span>
            <span>{retailer.name}</span>
            <ExternalLink className="w-3 h-3 text-[#7a7466]" />
          </a>
        ))}
      </div>
    );
  }

  // Default horizontal bar / primary buttons
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full sm:w-auto">
      {allRetailers.map((retailer) => (
        <a
          key={retailer.id}
          href={retailer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center space-x-2.5 px-4 py-2.5 rounded bg-[#15171d] hover:bg-[#1e2129] border border-[#2f333e] hover:border-[#c8a96e]/60 text-sm font-medium text-[#ece6d5] hover:text-white transition-all shadow-sm min-h-[44px]"
          id={`retailer-h-${retailer.id}`}
        >
          <span className="text-[#c8a96e] group-hover:scale-110 transition-transform">
            {getRetailerIcon(retailer.name)}
          </span>
          <span>{retailer.name}</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#797365] group-hover:text-[#c8a96e] transition-colors" />
        </a>
      ))}
    </div>
  );
};
