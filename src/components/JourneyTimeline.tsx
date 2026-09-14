import React, { useState } from 'react';
import { History, Calendar, MapPin, CheckCircle, Sparkles, Filter } from 'lucide-react';
import { TIMELINE_DATA, TimelineItem } from '../data/config';

export const JourneyTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'milestones' | 'national'>('all');

  const filteredItems = TIMELINE_DATA.filter((item) => {
    if (filter === 'milestones') return item.highlight;
    if (filter === 'national') {
      const combined = `${item.roleOrCategory} ${item.title} ${item.location || ''} ${item.subtitle || ''}`.toLowerCase();
      return combined.includes('national') || combined.includes('new delhi') || combined.includes('pan-india');
    }
    return true;
  });

  return (
    <section id="journey" className="relative py-20 lg:py-28 bg-[#0a0b0e] text-[#ece8e0] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#c8a96e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181a22] border border-[#2d3240] text-xs font-semibold tracking-[0.25em] text-[#c8a96e] uppercase mb-4">
              <History className="w-3.5 h-3.5" /> CHRONOLOGY OF INFLUENCE
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              MY JOURNEY
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#c8a96e] mt-2">
              From Porbandar to National Strategy & Literary Resistance
            </p>
          </div>

          {/* Quick Category Filters */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2 self-stretch sm:self-start md:self-auto bg-[#14161d] p-1.5 rounded-lg border border-[#272b38] text-xs max-w-full overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap min-h-[36px] flex items-center ${
                filter === 'all' ? 'bg-[#c8a96e] text-[#0f1116] font-semibold' : 'text-[#9c9586] hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setFilter('milestones')}
              className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap min-h-[36px] flex items-center ${
                filter === 'milestones' ? 'bg-[#c8a96e] text-[#0f1116] font-semibold' : 'text-[#9c9586] hover:text-white'
              }`}
            >
              Key Highlights
            </button>
            <button
              onClick={() => setFilter('national')}
              className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap min-h-[36px] flex items-center ${
                filter === 'national' ? 'bg-[#c8a96e] text-[#0f1116] font-semibold' : 'text-[#9c9586] hover:text-white'
              }`}
            >
              National Operations
            </button>
          </div>
        </div>

        {/* Cinematic Vertical Timeline */}
        <div className="relative pl-7 sm:pl-10 md:pl-0">
          
          {/* Central Vertical Line (on desktop) / Left Line (on mobile) */}
          <div className="absolute left-[11px] sm:left-[17px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#c8a96e] via-[#4d4433] to-[#252833] md:-translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Timeline node icon */}
                  <div className="absolute left-[-24px] sm:left-[-30px] md:left-1/2 top-1.5 w-6 h-6 rounded-full bg-[#161820] border-2 border-[#c8a96e] shadow-[0_0_12px_rgba(200,169,110,0.5)] md:-translate-x-1/2 z-20 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#c8a96e]" />
                  </div>

                  {/* Empty half for desktop alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? 'md:pr-12 text-left' : 'md:pl-12 text-left'
                    } pl-2 sm:pl-4 md:pl-0`}
                  >
                    <div
                      className={`p-6 rounded-xl bg-[#13151b] border ${
                        item.highlight ? 'border-[#c8a96e]/50 bg-[#161822]' : 'border-[#262a36]'
                      } group-hover:border-[#c8a96e]/70 transition-all duration-300 shadow-xl space-y-3 relative overflow-hidden`}
                    >
                      {item.highlight && (
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#c8a96e]/10 rounded-bl-full pointer-events-none" />
                      )}

                      {/* Header Row: Year Badge + Role */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#20232e] text-[#c8a96e] font-serif text-sm sm:text-base font-bold border border-[#343948]">
                          <Calendar className="w-3.5 h-3.5" /> {item.year}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-[#9f9889] font-medium">
                          {item.roleOrCategory}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#f7ecd5] transition-colors">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="font-serif italic text-sm text-[#c8a96e] mt-1 font-medium">
                            {item.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Location if available */}
                      {item.location && (
                        <div className="flex items-center gap-1.5 text-xs text-[#8c8577]">
                          <MapPin className="w-3.5 h-3.5 text-[#c8a96e] shrink-0" />
                          <span>{item.location}</span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#cac4b7] leading-relaxed whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
