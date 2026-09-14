import React from 'react';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { BookLinksConfig } from '../data/config';
import { BuyTheBookButtons } from './BuyTheBookButtons';
import bookCoverImage from '../assets/images/large.webp';

interface HeroBookStripProps {
  bookLinks: BookLinksConfig;
  onOpenBuyModal: () => void;
  onOpenSample: () => void;
}

export const HeroBookStrip: React.FC<HeroBookStripProps> = ({
  bookLinks,
  onOpenBuyModal,
  onOpenSample,
}) => {
  return (
    <section 
      className="relative z-20 bg-[#111318] border-y border-[#262a35] py-8 lg:py-10 shadow-2xl"
      id="hero-book-strip"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,169,110,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left: Book Cover Thumbnail & Details */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 sm:gap-6">
            {/* Book Cover Thumbnail with 3D depth */}
            <div 
              onClick={onOpenBuyModal}
              className="relative w-20 h-28 sm:w-24 sm:h-34 rounded shadow-2xl border border-[#3c4150] overflow-hidden shrink-0 group cursor-pointer bg-[#181a22] transition-transform duration-300 hover:scale-105"
            >
              <img
                src={bookCoverImage}
                alt="Roots of Resistance Original Cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Typography */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#c8a96e]/15 text-[#d8be86] text-[10px] sm:text-xs font-bold tracking-widest uppercase border border-[#c8a96e]/25">
                <Sparkles className="w-3 h-3" /> NOW AVAILABLE IN HARDCOVER
              </div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#fbf9f5]">
                ROOTS OF RESISTANCE
              </h2>
              <p className="font-serif italic text-xs sm:text-sm text-[#c8a96e]">
                The Ideological Battle for India's Soul
              </p>
              <p className="text-xs text-[#90897b] pt-0.5">
                Political Memoir • By Rajesh Bhojraj Griglani
              </p>
            </div>
          </div>

          {/* Right: Direct Retailer Purchase Buttons */}
          <div className="flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto">
            <div className="flex items-center justify-between w-full lg:w-auto gap-4">
              <span className="text-[11px] uppercase tracking-widest text-[#a39c8e] font-medium hidden sm:inline-block">
                Order directly from verified retailers:
              </span>
              <button
                onClick={onOpenSample}
                className="text-xs text-[#c8a96e] hover:underline font-medium ml-auto"
              >
                Read sample excerpt →
              </button>
            </div>

            {/* Clickable Retailer Buttons */}
            <div className="w-full lg:w-auto flex justify-center">
              <BuyTheBookButtons bookLinks={bookLinks} variant="horizontal" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
