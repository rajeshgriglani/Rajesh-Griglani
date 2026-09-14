import React, { useState } from 'react';
import { BookOpen, Sparkles, ChevronRight, Bookmark } from 'lucide-react';
import { BOOK_EXCERPTS, BookLinksConfig } from '../data/config';
import { BuyTheBookButtons } from './BuyTheBookButtons';

interface BookArchiveSampleProps {
  bookLinks: BookLinksConfig;
  onOpenBuyModal: () => void;
  onOpenSample: () => void;
}

export const BookArchiveSample: React.FC<BookArchiveSampleProps> = ({
  bookLinks,
  onOpenBuyModal,
  onOpenSample,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentExcerpt = BOOK_EXCERPTS[activeTab];

  return (
    <section id="book-sample" className="relative py-20 lg:py-28 bg-[#0e1015] text-[#ece8df] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#c8a96e]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181b24] border border-[#2d3240] text-xs font-semibold tracking-[0.25em] text-[#c8a96e] uppercase mb-3">
            <Bookmark className="w-3.5 h-3.5" /> LITERARY ARCHIVE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            FROM THE BOOK
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#c8a96e] mt-2">
            Selected Excerpts from Roots of Resistance
          </p>
        </div>

        {/* Excerpt Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {BOOK_EXCERPTS.map((exc, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === index
                  ? 'bg-[#c8a96e] text-[#111317] font-semibold shadow-md'
                  : 'bg-[#15171f] text-[#a49d8e] border border-[#272b38] hover:text-white'
              }`}
            >
              {exc.title}
            </button>
          ))}
        </div>

        {/* Major Literary Reading Card */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#13151c] border border-[#2c3140] shadow-2xl space-y-6 text-left relative overflow-hidden">
          
          <div className="flex items-center justify-between border-b border-[#232734] pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c8a96e] font-semibold block">
                {currentExcerpt.subtitle}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                {currentExcerpt.title}
              </h3>
            </div>
            <span className="text-[11px] uppercase font-mono px-2.5 py-1 rounded bg-[#1c202a] text-[#8e8779] border border-[#2e3342]">
              Official Passage
            </span>
          </div>

          {/* Passage Typography */}
          <div className="font-serif text-base sm:text-lg md:text-xl leading-relaxed text-[#ded8cb] whitespace-pre-line space-y-4 italic">
            "{currentExcerpt.content}"
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#232734] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#8f887b]">
              Published in the official collector's hardcover edition.
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenSample}
                className="px-4 py-2.5 rounded bg-[#181a24] hover:bg-[#222634] text-xs font-semibold text-[#c8a96e] uppercase tracking-wider border border-[#2f3544] transition-colors"
              >
                Read Extended Sample
              </button>
              <button
                onClick={onOpenBuyModal}
                className="px-5 py-2.5 rounded bg-[#c8a96e] hover:bg-[#d8b879] text-xs font-bold text-[#101217] uppercase tracking-wider transition-colors shadow-md"
              >
                BUY THE BOOK
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
