import React from 'react';
import { BookOpen, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { BookLinksConfig, SocialLinksConfig } from '../data/config';

interface FooterProps {
  bookLinks: BookLinksConfig;
  socialLinks: SocialLinksConfig;
  onOpenBuyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  bookLinks,
  socialLinks,
  onOpenBuyModal,
}) => {
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'My Journey', href: '#journey' },
    { label: 'BODHI', href: '#bodhi' },
    { label: 'Women Leadership', href: '#leadership' },
    { label: 'Strategy & Field', href: '#strategy' },
    { label: 'The Book', href: '#the-book' },
    { label: 'Writings', href: '#writings' },
    { label: 'Media & Press', href: '#media' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Ask Anything', href: '#ask-anything' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07080a] border-t border-[#1f222c] text-[#ded8cb] pt-16 pb-12 overflow-hidden">
      {/* Top subtle highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#1c1f28]">
          
          {/* Column 1: Brand & Positioning (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <div>
              <span className="font-serif text-lg font-bold tracking-[0.16em] text-white uppercase block">
                RAJESH BHOJRAJ
              </span>
              <span className="font-serif text-sm font-semibold tracking-[0.22em] text-[#c8a96e] uppercase block mt-0.5">
                GRIGLANI
              </span>
            </div>

            <p className="text-xs text-[#9e9687] leading-relaxed">
            Author  <br /> Political Strategist  <br /> Third-Generation Congress Worker </p>
          

          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-widest text-[#c8a96e] font-semibold">
              Navigation
            </h4>
            <div className="flex flex-col gap-1.5 text-xs">
              {quickLinks.slice(0, 6).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-[#a49c8f] hover:text-[#f8f4eb] transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="text-[#c8a96e] hover:text-[#faebd0] transition-colors py-0.5 font-medium"
              >
                Contact & Office
              </a>
            </div>
          </div>

          {/* Column 3: The Book & Retailers (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-widest text-[#c8a96e] font-semibold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Major Publication
            </h4>

            <div className="space-y-1">
              <p className="font-serif text-sm font-bold text-white">
                ROOTS OF RESISTANCE
              </p>
              <p className="font-serif italic text-xs text-[#c8a96e]">
                The Ideological Battle for India's Soul
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <div className="text-[11px] uppercase tracking-wider text-[#8b8475]">
                Order Official Hardcover:
              </div>
              <div className="flex flex-col gap-1.5 text-xs">
                {bookLinks.amazon.enabled && (
                  <a
                    href={bookLinks.amazon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c5beb0] hover:text-white flex items-center justify-between"
                  >
                    <span>Amazon India</span>
                    <ExternalLink className="w-3 h-3 text-[#797263]" />
                  </a>
                )}
                {bookLinks.notionPress.enabled && (
                  <a
                    href={bookLinks.notionPress.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c5beb0] hover:text-white flex items-center justify-between"
                  >
                    <span>Notion Press</span>
                    <ExternalLink className="w-3 h-3 text-[#797263]" />
                  </a>
                )}
                {bookLinks.flipkart.enabled && (
                  <a
                    href={bookLinks.flipkart.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c5beb0] hover:text-white flex items-center justify-between"
                  >
                    <span>Flipkart</span>
                    <ExternalLink className="w-3 h-3 text-[#797263]" />
                  </a>
                )}
                {bookLinks.hugendubel && bookLinks.hugendubel.enabled && (
                  <a
                    href={bookLinks.hugendubel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c5beb0] hover:text-white flex items-center justify-between"
                  >
                    <span>Hugendubel (Germany/EU)</span>
                    <ExternalLink className="w-3 h-3 text-[#797263]" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Column 4: Official Broadcasts & Profiles (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-widest text-[#c8a96e] font-semibold">
                Official Channels & Profiles
              </h4>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#161820] text-[#8e8779] border border-[#262a36]">
                Verified
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a49c8f] hover:text-[#f8f4eb] flex items-center justify-between py-1.5 border-b border-[#171922] min-h-[38px] group"
              >
                <span className="group-hover:text-white transition-colors">X (Twitter)</span>
                <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#c8a96e] transition-colors" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a49c8f] hover:text-[#f8f4eb] flex items-center justify-between py-1 border-b border-[#171922] group"
              >
                <span className="group-hover:text-white transition-colors">Instagram</span>
                <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#c8a96e] transition-colors" />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a49c8f] hover:text-[#f8f4eb] flex items-center justify-between py-1 border-b border-[#171922] group"
              >
                <span className="group-hover:text-white transition-colors">Facebook</span>
                <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#c8a96e] transition-colors" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a49c8f] hover:text-[#f8f4eb] flex items-center justify-between py-1 border-b border-[#171922] group"
              >
                <span className="group-hover:text-white transition-colors">LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#c8a96e] transition-colors" />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a49c8f] hover:text-[#f8f4eb] flex items-center justify-between py-1 border-b border-[#171922] group"
              >
                <span className="group-hover:text-white transition-colors">YouTube</span>
                <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#c8a96e] transition-colors" />
              </a>
              <a
                href={socialLinks.imdb}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a49c8f] hover:text-[#f8f4eb] flex items-center justify-between py-1 border-b border-[#171922] group"
              >
                <span className="group-hover:text-[#e2b616] transition-colors">IMDb Profile</span>
                <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#e2b616] transition-colors" />
              </a>
              <a
                href={socialLinks.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a49c8f] hover:text-[#f8f4eb] flex items-center justify-between py-1 border-b border-[#171922] group"
              >
                <span className="group-hover:text-[#25D366] transition-colors">WhatsApp Channel</span>
                <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#25D366] transition-colors" />
              </a>
              <a
                href={socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a49c8f] hover:text-[#f8f4eb] flex items-center justify-between py-1 border-b border-[#171922] group"
              >
                <span className="group-hover:text-[#229ED9] transition-colors">Telegram Channel</span>
                <ExternalLink className="w-3 h-3 text-[#797263] group-hover:text-[#229ED9] transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Branding */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7e7769]">
          <div className="text-center sm:text-left space-y-1">
            <p>© 2026 Rajesh Bhojraj Griglani. All rights reserved.</p>
            <p className="text-[11px] text-[#6d665a]">
              Roots of Resistance is available in hardcover through verified book retailers across India & worldwide.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
