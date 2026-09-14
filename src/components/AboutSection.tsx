import React from 'react';
import { Compass, GraduationCap, ExternalLink } from 'lucide-react';
import { AUTHOR_DATA } from '../data/config';
import portraitImage from '../assets/images/Rajesh Griglani portrait.png';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#0e1014] text-[#ece8e0] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#c8a96e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow & Headline */}
        <div className="max-w-3xl mb-14 lg:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181a22] border border-[#2d3240] text-xs font-semibold tracking-[0.25em] text-[#c8a96e] uppercase mb-4">
            <Compass className="w-3.5 h-3.5" /> BIOGRAPHICAL PROFILE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            THE MAN BEHIND THE VOICE
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-[#c8a96e] mt-2">
            Rajesh Bhojraj Griglani
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Portrait & Personal Dossier Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#14161d] border border-[#2b303d] p-3 shadow-2xl group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#0a0b0e]">
                <img
                  src={portraitImage}
                  alt="Rajesh Bhojraj Griglani Portrait"
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="text-xs uppercase tracking-widest text-[#c8a96e] font-semibold">
                    Kutiyana • Porbandar • Gujarat
                  </div>
                  <div className="font-serif text-lg font-bold text-white">
                    Rajesh Bhojraj Griglani
                  </div>
                </div>
              </div>
            </div>

            {/* Structured Dossier Snapshot */}
            <div className="p-5 rounded-xl bg-[#13151c] border border-[#262a36] space-y-3.5 text-xs text-[#ded8cb]">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#202430]">
                <span className="text-[#8f8879] uppercase tracking-wider">Date of Birth</span>
                <span className="text-[#f5f2ea] font-medium">{AUTHOR_DATA.birthDate}</span>
              </div>
              <div className="flex items-center justify-between pb-2.5 border-b border-[#202430]">
                <span className="text-[#8f8879] uppercase tracking-wider">Birthplace</span>
                <span className="text-[#f5f2ea] font-medium">{AUTHOR_DATA.birthPlace}</span>
              </div>
              <div className="flex items-center justify-between pb-2.5 border-b border-[#202430]">
                <span className="text-[#8f8879] uppercase tracking-wider">Lineage</span>
                <span className="text-[#c8a96e] font-medium">3rd Generation Congressman</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8f8879] uppercase tracking-wider">Primary Location</span>
                <span className="text-[#f5f2ea] font-medium">New Delhi & Gujarat</span>
              </div>
            </div>

            {/* Official Digital Channels & Profiles */}
            <div className="p-4 rounded-xl bg-[#13151c] border border-[#262a36] space-y-3 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#c8a96e] font-semibold">
                  Official Channels
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#1c1f2a] text-[#8e8779] border border-[#2a2f3d]">
                  Connect
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={AUTHOR_DATA.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded bg-[#181a23] hover:bg-[#20232e] border border-[#272b38] hover:border-[#c8a96e]/50 text-[#cfc8ba] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-white">X (Twitter)</span>
                  <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#c8a96e]" />
                </a>
                <a
                  href={AUTHOR_DATA.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded bg-[#181a23] hover:bg-[#20232e] border border-[#272b38] hover:border-[#c8a96e]/50 text-[#cfc8ba] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-white">Instagram</span>
                  <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#c8a96e]" />
                </a>
                <a
                  href={AUTHOR_DATA.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded bg-[#181a23] hover:bg-[#20232e] border border-[#272b38] hover:border-[#c8a96e]/50 text-[#cfc8ba] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-white">Facebook</span>
                  <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#c8a96e]" />
                </a>
                <a
                  href={AUTHOR_DATA.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded bg-[#181a23] hover:bg-[#20232e] border border-[#272b38] hover:border-[#c8a96e]/50 text-[#cfc8ba] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-white">LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#c8a96e]" />
                </a>
                <a
                  href={AUTHOR_DATA.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded bg-[#181a23] hover:bg-[#20232e] border border-[#272b38] hover:border-[#c8a96e]/50 text-[#cfc8ba] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-white">YouTube</span>
                  <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#c8a96e]" />
                </a>
                <a
                  href={AUTHOR_DATA.socialLinks.imdb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded bg-[#181a23] hover:bg-[#20232e] border border-[#272b38] hover:border-[#c8a96e]/50 text-[#cfc8ba] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-[#e2b616]">IMDb</span>
                  <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#e2b616]" />
                </a>
                <a
                  href={AUTHOR_DATA.socialLinks.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded bg-[#181a23] hover:bg-[#20232e] border border-[#272b38] hover:border-[#c8a96e]/50 text-[#cfc8ba] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group col-span-2"
                >
                  <span className="group-hover:text-[#25D366]">WhatsApp</span>
                  <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#25D366]" />
                </a>
                <a
                  href={AUTHOR_DATA.socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-[#181a23] hover:bg-[#20232e] border border-[#272b38] hover:border-[#c8a96e]/50 text-[#cfc8ba] hover:text-white flex items-center justify-between transition-colors group"
                >
                  <span className="group-hover:text-[#229ED9]">Telegram</span>
                  <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#229ED9]" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: Narrative Biography & Academic Foundations */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Narrative Story (Not a dry CV) */}
            <div className="space-y-5 text-sm sm:text-base md:text-lg text-[#ded9cc] leading-relaxed font-normal">
              {AUTHOR_DATA.bioNarrative.map((para, idx) => (
                <p key={idx} className="first-of-type:font-serif first-of-type:text-lg sm:first-of-type:text-xl first-of-type:text-[#faf7f0] first-of-type:leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Academic Foundations */}
            <div className="pt-6 border-t border-[#232732] space-y-5">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#faf7f0] flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#c8a96e]" /> Academic & Leadership Foundations
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {AUTHOR_DATA.education.map((edu, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-xl bg-[#14161d] border border-[#282d3b] hover:border-[#c8a96e]/40 transition-colors space-y-2"
                  >
                    <span className="inline-block px-2 py-0.5 rounded bg-[#20232e] text-[#c8a96e] text-xs font-mono font-medium">
                      {edu.period}
                    </span>
                    <h4 className="font-serif text-base font-bold text-white">
                      {edu.linkUrl ? (
                        <a
                          href={edu.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-[#c8a96e] transition-colors group/link"
                        >
                          <span className="underline decoration-[#c8a96e]/30 underline-offset-4 group-hover/link:decoration-[#c8a96e]">
                            {edu.institution}
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#c8a96e] opacity-70 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        edu.institution
                      )}
                    </h4>
                    {edu.degree && (
                      <p className="text-xs font-medium text-[#ded8cb]">
                        {edu.degree}
                      </p>
                    )}
                    {edu.details && (
                      <p className="text-xs text-[#9c9586] leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values Triad */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#12141a] border border-[#222633] space-y-1">
                <div className="text-xs uppercase tracking-wider text-[#c8a96e] font-semibold">Ideological</div>
                <div className="font-serif text-sm font-bold text-white">Constitutional Defense</div>
                <div className="text-xs text-[#8f887b]">Unwavering fidelity to India's secular compact.</div>
              </div>
              <div className="p-4 rounded-lg bg-[#12141a] border border-[#222633] space-y-1">
                <div className="text-xs uppercase tracking-wider text-[#c8a96e] font-semibold">Pedagogical</div>
                <div className="font-serif text-sm font-bold text-white">BODHI Philosophy</div>
                <div className="text-xs text-[#8f887b]">Awakening human instinct, intellect and intuition.</div>
              </div>
              <div className="p-4 rounded-lg bg-[#12141a] border border-[#222633] space-y-1">
                <div className="text-xs uppercase tracking-wider text-[#c8a96e] font-semibold">Operational</div>
                <div className="font-serif text-sm font-bold text-white">Grassroots Fidelity</div>
                <div className="text-xs text-[#8f887b]">Over 30 years across 10+ state assemblies.</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
