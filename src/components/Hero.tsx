import React from 'react';
import { BookOpen, ArrowDown, ChevronRight, Sparkles } from 'lucide-react';
import { AUTHOR_DATA } from '../data/config';
import portraitImage from '../assets/images/Rajesh Griglani portrait.png';

interface HeroProps {
  onOpenBuyModal: () => void;
  onExploreBook: () => void;
  onReadStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBuyModal,
  onExploreBook,
  onReadStory,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-28 overflow-hidden bg-[#0a0b0e]"
    >
      {/* Subtle archival backdrop textures and restrained amber glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_25%_35%,rgba(200,169,110,0.18)_0%,transparent_60%)]" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[#1b2230]/40 blur-3xl pointer-events-none" />
      
      {/* Subtle architectural vertical gridlines for editorial precision */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 pointer-events-none opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-[#c8a96e] h-full" />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: PERSON + IDEAS */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6 sm:space-y-8">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-8 h-[1px] bg-[#c8a96e]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#d6be8c] uppercase">
                {AUTHOR_DATA.eyebrow}
              </span>
            </div>

            {/* Dramatic Stacked Name */}
            <div className="space-y-1">
              <h1 className="font-serif font-black tracking-tight text-white uppercase text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[0.92]">
                <span className="block text-[#eae5d9]">RAJESH</span>
                <span className="block text-[#eae5d9]">BHOJRAJ</span>
                <span className="block text-[#c8a96e] tracking-tight">GRIGLANI</span>
              </h1>
            </div>

            {/* Headline / Core Philosophical Quote */}
            <div className="relative pl-5 border-l-2 border-[#c8a96e]/60 py-1">
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#f3eee3] leading-snug tracking-normal">
                "{AUTHOR_DATA.primaryQuote}"
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-[#a8a192] max-w-xl font-normal leading-relaxed">
              {AUTHOR_DATA.heroSupportingText}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* PRIMARY CTA: READ MY STORY */}
              <button
                onClick={onReadStory}
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded bg-[#f0ebd9] hover:bg-white text-[#101217] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
                id="hero-read-story-btn"
              >
                <span>READ MY STORY</span>
                <ChevronRight className="w-4 h-4 text-[#101217] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* SECONDARY CTA: EXPLORE THE BOOK */}
              <button
                onClick={onExploreBook}
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded bg-[#161820] hover:bg-[#20232c] text-[#e5decb] hover:text-[#faf6ee] border border-[#323644] hover:border-[#c8a96e]/70 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md min-h-[48px]"
                id="hero-explore-book-btn"
              >
                <BookOpen className="w-4 h-4 text-[#c8a96e]" />
                <span>EXPLORE THE BOOK</span>
              </button>
            </div>

            {/* Micro Credential Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[#20232d] max-w-xl">
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#8b8475]">Legacy</span>
                <span className="font-serif text-sm sm:text-base font-semibold text-[#ebe6d8]">3rd Generation Congressman</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#8b8475]">Institution</span>
                <span className="font-serif text-sm sm:text-base font-semibold text-[#ebe6d8]">BODHI INSTITUTE (Founder)</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#8b8475]">Publication</span>
                <span className="font-serif text-sm sm:text-base font-semibold text-[#c8a96e] block">Roots of Resistance</span>
                <span className="font-serif text-xs text-[#b8ab96] block">(The Ideological Battle for India's Soul)</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CINEMATIC PORTRAIT */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer frame & archival border */}
              <div className="relative rounded-2xl overflow-hidden bg-[#13151b] border border-[#2e3340] shadow-2xl p-2.5 sm:p-3 group">
                
                {/* Image presentation preserving authentic portrait */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#0c0d11]">
                  <img
                    src={portraitImage}
                    alt="Rajesh Bhojraj Griglani - Author, Political Strategist & Leadership Mentor"
                    className="w-full h-full object-cover object-top filter brightness-[0.97] contrast-[1.04] transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                  />

                  {/* Soft bottom chiaroscuro gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent opacity-70" />

                  {/* Overlay Title Label on Portrait */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-[#0e1015]/90 backdrop-blur-md border border-[#262a36] text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">
                          Rajesh Bhojraj Griglani
                        </p>
                        <p className="text-[11px] text-[#c8a96e] uppercase tracking-wider">
                          Author • Strategist • Mentor
                        </p>
                      </div>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#1e222c] text-[#a19989] border border-[#343948]">
                        Official
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating decorative archival seal */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3 rounded-xl bg-[#14161d] border border-[#303544] shadow-xl items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-full bg-[#c8a96e]/15 border border-[#c8a96e]/30 flex items-center justify-center text-[#c8a96e]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#f5f1e8] font-semibold">
                    New Publication
                  </div>
                  <div className="text-[10px] text-[#918a7c]">
                    Roots of Resistance (2026)
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-[10px] tracking-[0.2em] text-[#6d675b] uppercase opacity-75 hover:opacity-100 transition-opacity">
        <span>SCROLL TO DISCOVER</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#c8a96e] animate-bounce" />
      </div>
    </section>
  );
};
