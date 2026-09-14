import React from 'react';
import { X, BookOpen, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { BookLinksConfig } from '../data/config';
import { BuyTheBookButtons } from './BuyTheBookButtons';
import bookCoverImage from '../assets/images/large.webp';

interface BuyTheBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookLinks: BookLinksConfig;
  onOpenSample?: () => void;
}

export const BuyTheBookModal: React.FC<BuyTheBookModalProps> = ({
  isOpen,
  onClose,
  bookLinks,
  onOpenSample
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#111317] border border-[#2d313c] rounded-xl shadow-2xl p-5 sm:p-8 text-[#ece8e0]"
        id="buy-book-modal-container"
      >
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8a96e]/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#8f887b] hover:text-[#f3efe6] hover:bg-[#1f232c] transition-colors"
          aria-label="Close dialog"
          id="close-buy-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pb-6 border-b border-[#242832]">
          <div className="relative w-24 h-32 sm:w-28 sm:h-36 rounded-md overflow-hidden shadow-lg border border-[#3b404d] shrink-0 bg-[#16181f]">
            <img 
              src={bookCoverImage}
              alt="Roots of Resistance Hardcover"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#c8a96e]/10 text-[#d9be85] text-xs font-semibold tracking-wider uppercase mb-2 border border-[#c8a96e]/20">
              <Sparkles className="w-3.5 h-3.5" /> Official Hardcover Edition
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#faf8f5]">
              ROOTS OF RESISTANCE
            </h3>
            <p className="text-sm font-serif italic text-[#c8a96e] mt-0.5">
              The Ideological Battle for India's Soul
            </p>
            <p className="text-xs text-[#9d9688] mt-2">
              By <strong className="text-[#ece8e0] font-medium">Rajesh Bhojraj Griglani</strong> • Political Memoir / Narrative Nonfiction
            </p>
          </div>
        </div>

        {/* Purchase Disclaimer / Redirection Note */}
        <div className="mt-5 mb-4 p-3.5 rounded bg-[#171920] border border-[#2b2f3a] text-xs text-[#a8a192] flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#c8a96e] shrink-0 mt-0.5" />
          <span>
            Select your preferred verified bookstore below. Clicking will open the retailer's official purchase page in a new secure tab.
          </span>
        </div>

        {/* Retailers List */}
        <div className="py-2">
          <BuyTheBookButtons bookLinks={bookLinks} variant="grid" />
        </div>

        {/* Optional Action & Sample */}
        <div className="mt-6 pt-4 border-t border-[#232731] flex flex-wrap items-center justify-between gap-3 text-xs text-[#8f887b]">
          {onOpenSample ? (
            <button
              onClick={() => {
                onClose();
                onOpenSample();
              }}
              className="inline-flex items-center gap-1.5 text-[#c8a96e] hover:text-[#eeddb7] transition-colors font-medium"
              id="modal-read-sample-btn"
            >
              <BookOpen className="w-3.5 h-3.5" /> Read First Chapter Sample
            </button>
          ) : (
            <span>Official Author Release</span>
          )}
          <span className="text-[#6d685e]">
            Format: Collector's Hardcover • English
          </span>
        </div>
      </div>
    </div>
  );
};
