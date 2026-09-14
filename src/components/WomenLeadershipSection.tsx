import React, { useState } from 'react';
import { Users, Sparkles, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { WOMEN_LEADERSHIP_STATES } from '../data/config';
import leadershipImage from '../assets/Gallery/Gujarat Mahila Congress — Vichar Satra.jpg';

export const WomenLeadershipSection: React.FC = () => {
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);
  const activeState = WOMEN_LEADERSHIP_STATES[selectedStateIndex];

  return (
    <section id="leadership" className="relative py-20 lg:py-28 bg-[#0a0b0e] text-[#ece8e0] overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#c8a96e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181a22] border border-[#2d3240] text-xs font-semibold tracking-[0.25em] text-[#c8a96e] uppercase mb-4">
            <Users className="w-3.5 h-3.5" /> DEMOCRATIC EMPOWERMENT
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            WOMEN LEADERSHIP
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-[#c8a96e] mt-2">
            Building Women Leaders at the Grassroots
          </p>
          <p className="text-sm sm:text-base text-[#a69f90] mt-4 leading-relaxed">
            In collaboration with the All India Mahila Congress, Rajesh Bhojraj Griglani has formulated and delivered intensive leadership capacity-building programs, transforming block and district workers into self-sufficient campaign commanders, vocal spokespersons, and booth leaders.
          </p>
        </div>

        {/* 2-Column Photographic Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Documentary Photographic Presentation */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-[#13151b] border border-[#2b303d] p-3 shadow-2xl group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0a0b0e]">
                <img
                  src={leadershipImage}
                  alt="Women grassroots leadership training session in India"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.98] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] uppercase tracking-widest text-[#c8a96e] font-semibold block">
                    Field Documentation
                  </span>
                  <p className="font-serif text-sm sm:text-base text-white font-medium">
                    State Leadership Development Workshop with All India Mahila Congress delegates.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#12141a] border border-[#222633] text-xs text-[#9d9688] leading-relaxed">
              <strong className="text-[#f5f1e8] font-medium block mb-1">Pedagogical Philosophy:</strong>
              Training is not merely about speech delivery; it is about providing female cadres with the administrative literacy, booth tracking tools, and psychological confidence to claim leadership spaces autonomously.
            </div>
          </div>

          {/* Right: Interactive State Leadership Blueprint */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="text-xs uppercase tracking-widest text-[#c8a96e] font-semibold">
              Selected States of Active Collaboration:
            </div>

            {/* State Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {WOMEN_LEADERSHIP_STATES.map((st, idx) => {
                const isActive = idx === selectedStateIndex;
                return (
                  <button
                    key={st.state}
                    onClick={() => setSelectedStateIndex(idx)}
                    className={`p-3 rounded-lg border text-left transition-all min-h-[52px] flex flex-col justify-center ${
                      isActive
                        ? 'bg-[#1e222d] border-[#c8a96e] shadow-md'
                        : 'bg-[#12141a] border-[#252936] hover:border-[#383e4e] text-[#a8a192]'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-mono text-[#8f887b] block">
                      STATE 0{idx + 1}
                    </span>
                    <span className={`font-serif text-sm font-bold block ${isActive ? 'text-[#c8a96e]' : 'text-white'}`}>
                      {st.state}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active State Deep Dive Card */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#14161e] border border-[#282d3c] space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#242835]">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8f8879]">Program Scope</span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {activeState.state}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded bg-[#202430] text-[#c8a96e] text-xs font-medium border border-[#343b4d]">
                  {activeState.tag}
                </span>
              </div>

              <p className="text-sm text-[#ded8cb] leading-relaxed">
                {activeState.details}
              </p>

              <div className="pt-2 space-y-2 text-xs text-[#a39c8e]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c8a96e] shrink-0" />
                  <span>Cadre verification and booth-level roster accountability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c8a96e] shrink-0" />
                  <span>Media messaging and localized policy communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c8a96e] shrink-0" />
                  <span>Long-term volunteer retention and women candidate mentoring</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
