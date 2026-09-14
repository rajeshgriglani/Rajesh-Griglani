import React, { useState } from 'react';
import { Layers, MapPin, CheckSquare, Target, Compass, Sparkles } from 'lucide-react';
import { STRATEGY_AREAS, STATES_EXPERIENCE, StateExperience } from '../data/config';

export const StrategySection: React.FC = () => {
  const [selectedState, setSelectedState] = useState<StateExperience>(STATES_EXPERIENCE[0]);

  return (
    <section id="strategy" className="relative py-20 lg:py-28 bg-[#0d0e12] text-[#ece8e0] overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-[#c8a96e]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181a22] border border-[#2d3240] text-xs font-semibold tracking-[0.25em] text-[#c8a96e] uppercase mb-4">
            <Target className="w-3.5 h-3.5" /> DOMAIN EXPERTISE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            STRATEGY & FIELD EXPERIENCE
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-[#c8a96e] mt-2">
            A Scientific, Grounded Approach to Democratic Organization
          </p>
          <p className="text-sm sm:text-base text-[#a69f90] mt-4 leading-relaxed">
            Approaching politics not as marketing rhetoric, but as an institutional discipline combining structural booth hierarchies, demographic literacy, and deep grassroots engagement.
          </p>
        </div>

        {/* 9 Core Strategic Capability Areas Grid */}
        <div className="mb-16">
          <div className="text-xs uppercase tracking-widest text-[#c8a96e] font-semibold mb-6">
            Core Operational Portfolios
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STRATEGY_AREAS.map((area, idx) => (
              <div
                key={area.name}
                className="p-5 rounded-xl bg-[#13151c] border border-[#262a36] hover:border-[#c8a96e]/40 transition-all duration-200 space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#8f887b] group-hover:text-[#c8a96e] transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#2a2e3b] group-hover:bg-[#c8a96e] transition-colors" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#f8ecd4] transition-colors">
                  {area.name}
                </h3>
                <p className="text-xs text-[#9e9788] leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive State Operations & Footprint Explorer */}
        <div className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-[#111319] border border-[#262b38] space-y-8 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#212532]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c8a96e] font-semibold block mb-1">
                Electoral Footprint & Advisory
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                States & Regional Assemblies Associated with Strategic Work
              </h3>
            </div>
            <span className="text-xs text-[#8f887a] bg-[#171922] px-3 py-1.5 rounded border border-[#2d3240] self-start sm:self-auto">
              10+ Regional & National Assemblies
            </span>
          </div>

          {/* State Chips Grid */}
          <div className="flex flex-wrap gap-2.5">
            {STATES_EXPERIENCE.map((st) => {
              const isSelected = selectedState.state === st.state;
              return (
                <button
                  key={st.state}
                  onClick={() => setSelectedState(st)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all min-h-[44px] flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#c8a96e] text-[#0f1116] shadow-md scale-105'
                      : 'bg-[#161820] text-[#a49d8f] border border-[#282d3b] hover:border-[#40465a] hover:text-white'
                  }`}
                >
                  {st.state}
                </button>
              );
            })}
          </div>

          {/* Detailed Selected State Card */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#151720] border border-[#2b3040] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-mono text-[#8f8879]">
                {selectedState.region}
              </span>
              <h4 className="font-serif text-2xl font-bold text-white">
                {selectedState.state}
              </h4>
              <p className="text-xs font-semibold text-[#c8a96e] pt-1">
                {selectedState.focus}
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs sm:text-sm text-[#ded8cb] leading-relaxed">
                {selectedState.description}
              </p>

              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-widest text-[#8f8879] block mb-2 font-medium">
                  Key Strategic Deployments:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {selectedState.keyInitiatives.map((init, i) => (
                    <div key={i} className="p-2.5 rounded bg-[#101217] border border-[#222632] text-[#ded8ca]">
                      • {init}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
