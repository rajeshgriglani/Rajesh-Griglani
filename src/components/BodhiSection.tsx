import React from 'react';
import { Eye, Brain, Compass, Sparkles, BookOpen, Layers, ShieldCheck, Target } from 'lucide-react';
import { BODHI_PILLARS, BODHI_CAPABILITIES } from '../data/config';

interface BodhiSectionProps {
  onOpenContact: (reason?: string) => void;
}

export const BodhiSection: React.FC<BodhiSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="bodhi" className="relative py-20 lg:py-28 bg-[#0d0e12] text-[#ece8e0] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#c8a96e]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#191b24] border border-[#2d3240] text-xs font-semibold tracking-[0.25em] text-[#c8a96e] uppercase mb-4">
            <Compass className="w-3.5 h-3.5" /> INSTITUTIONAL FRAMEWORK
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase">
            BODHI
          </h2>
          <p className="font-serif text-base sm:text-xl text-[#d4cdbf] font-medium tracking-wide mt-2">
            Bureau of Developing Human Instincts, Intellect & Intuitions
          </p>
          <div className="w-16 h-[2px] bg-[#c8a96e] mx-auto my-4" />
          <p className="text-xs sm:text-sm text-[#9c9586] max-w-2xl mx-auto leading-relaxed">
            Founded by Rajesh Bhojraj Griglani, BODHI is an elite intellectual institute and pedagogical framework bridging human behavioral psychology, constitutional literacy, and grassroots strategic governance.
          </p>
        </div>

        {/* The 3 Core Pillars: INSTINCT, INTELLECT, INTUITION (Large Editorial Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {BODHI_PILLARS.map((pillar, idx) => {
            return (
              <div
                key={pillar.title}
                className="relative rounded-2xl bg-[#13151c] border border-[#292e3b] hover:border-[#c8a96e]/60 transition-all duration-300 p-5 sm:p-8 flex flex-col justify-between shadow-2xl group overflow-hidden"
              >
                {/* Subtle top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c8a96e]/40 to-transparent group-hover:via-[#c8a96e] transition-all" />

                <div className="space-y-5">
                  {/* Pillar Number & Subtitle */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#c8a96e] uppercase tracking-widest font-bold">
                      PILLAR 0{idx + 1}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#8e8779] bg-[#1a1d26] px-2.5 py-0.5 rounded border border-[#2d3240]">
                      {pillar.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#f8ecd4] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Tagline */}
                  <p className="font-serif italic text-sm sm:text-base text-[#c8a96e] leading-snug">
                    "{pillar.tagline}"
                  </p>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-[#b8b1a2] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Sub-modules */}
                <div className="pt-6 mt-6 border-t border-[#222530] space-y-2">
                  <div className="text-[11px] uppercase tracking-widest text-[#8e8779] font-medium">
                    Core Curriculum Focus:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#ded8ca]">
                    {pillar.modules.map((mod, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Specialized Capabilities */}
        <div className="mt-16 p-5 sm:p-8 md:p-10 rounded-2xl bg-[#111319] border border-[#252936] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#222632] pb-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                BODHI Program Modules & Cadre Curricula
              </h3>
              <p className="text-xs text-[#9c9586] mt-1">
                Customized for state party committees, women delegates, legislative candidates & civil organizers.
              </p>
            </div>
            <button
              onClick={() => onOpenContact('BODHI Institutional Workshop')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#1b1e28] hover:bg-[#252a38] text-[#c8a96e] hover:text-[#fbf9f5] border border-[#343a4a] text-xs font-semibold uppercase tracking-wider transition-all self-start sm:self-auto min-h-[44px]"
              id="bodhi-workshop-inquiry-btn"
            >
              <Target className="w-3.5 h-3.5" /> Request Institutional Workshop
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BODHI_CAPABILITIES.map((cap, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-[#151720] border border-[#282c3a] space-y-2 hover:border-[#c8a96e]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#20232e] text-[#c8a96e] flex items-center justify-center font-mono text-xs font-bold mb-3 border border-[#333847]">
                  0{index + 1}
                </div>
                <h4 className="font-serif text-base font-bold text-[#faf7f0]">
                  {cap.title}
                </h4>
                <p className="text-xs text-[#9d9688] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
