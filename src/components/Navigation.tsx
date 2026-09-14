import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

interface NavigationProps {
  onOpenBuyModal: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenBuyModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section spy
      const sections = [
        'hero',
        'the-book',
        'about',
        'journey',
        'bodhi',
        'leadership',
        'strategy',
        'writings',
        'media',
        'gallery',
        'contact',
      ];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'My Journey', href: '#journey', id: 'journey' },
    { label: 'BODHI', href: '#bodhi', id: 'bodhi' },
    { label: 'Leadership', href: '#leadership', id: 'leadership' },
    { label: 'The Book', href: '#the-book', id: 'the-book' },
    { label: 'Writings', href: '#writings', id: 'writings' },
    { label: 'Media', href: '#media', id: 'media' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0d10]/92 backdrop-blur-md border-b border-[#232733] py-3.5 shadow-2xl'
            : 'bg-transparent py-5 lg:py-6 border-b border-white/5'
        }`}
        id="main-navigation-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="group flex flex-col tracking-tight text-left focus:outline-none"
            id="nav-logo"
          >
            <span className="font-serif text-sm sm:text-base font-bold tracking-[0.18em] text-[#faf6ee] uppercase leading-none group-hover:text-[#c8a96e] transition-colors">
              RAJESH BHOJRAJ
            </span>
            <span className="font-serif text-xs sm:text-sm font-semibold tracking-[0.24em] text-[#c8a96e] uppercase leading-tight mt-0.5">
              GRIGLANI
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-7 text-xs font-medium uppercase tracking-wider text-[#bfb8aa]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative py-1 transition-colors hover:text-[#f8f5ee] ${
                    isActive ? 'text-[#e9c782] font-semibold' : ''
                  }`}
                  id={`nav-link-${link.id}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c8a96e] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: BUY THE BOOK */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBuyModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#c8a96e] hover:bg-[#d8b879] text-[#101217] font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              id="nav-buy-book-btn"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>BUY THE BOOK</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenBuyModal}
              className="sm:hidden px-3.5 py-1.5 rounded bg-[#c8a96e] text-[#101217] font-semibold text-[11px] uppercase tracking-wider min-h-[38px] flex items-center justify-center shadow-sm"
              id="mobile-buy-shortcut-btn"
            >
              Buy Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#14161d] text-[#e8e4d8] border border-[#272b36] hover:text-[#c8a96e] transition-colors focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle mobile menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#0a0b0e]/98 backdrop-blur-xl xl:hidden flex flex-col p-6 pt-24 overflow-y-auto animate-in fade-in duration-200"
          id="mobile-menu-drawer"
        >
          <div className="flex justify-between items-center absolute top-6 left-6 right-6 pb-4 border-b border-[#212530]">
            <div>
              <div className="font-serif text-lg font-bold tracking-widest text-[#f5f2ea] uppercase">
                RAJESH BHOJRAJ
              </div>
              <div className="font-serif text-xs font-semibold tracking-widest text-[#c8a96e] uppercase">
                GRIGLANI
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-[#181a22] text-[#8e8779] hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-4 my-auto py-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-serif text-2xl tracking-wide text-[#d6d0c2] hover:text-[#c8a96e] transition-colors text-left py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#212530] space-y-3 mt-auto">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBuyModal();
              }}
              className="w-full py-3.5 rounded bg-[#c8a96e] text-[#111318] font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
              id="mobile-drawer-buy-btn"
            >
              <BookOpen className="w-4 h-4" /> BUY ROOTS OF RESISTANCE
            </button>
          </div>
        </div>
      )}
    </>
  );
};
