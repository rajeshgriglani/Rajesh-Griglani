import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HeroBookStrip } from './components/HeroBookStrip';
import { BookSection } from './components/BookSection';
import { AboutSection } from './components/AboutSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { BodhiSection } from './components/BodhiSection';
import { WomenLeadershipSection } from './components/WomenLeadershipSection';
import { StrategySection } from './components/StrategySection';
import { WritingsSection } from './components/WritingsSection';
import { MediaSection } from './components/MediaSection';
import { GallerySection } from './components/GallerySection';
import { BookArchiveSample } from './components/BookArchiveSample';
import { NewsletterSection } from './components/NewsletterSection';
import { ContactSection } from './components/ContactSection';
import { AskRajeshSection } from './components/AskRajeshSection';
import { Footer } from './components/Footer';
import { BuyTheBookModal } from './components/BuyTheBookModal';
import { BookSampleModal } from './components/BookSampleModal';
import { BOOK_LINKS_CONFIG, SOCIAL_LINKS_CONFIG, BookLinksConfig, SocialLinksConfig } from './data/config';
import { BookOpen } from 'lucide-react';

export function App() {
  const [bookLinks] = useState<BookLinksConfig>(BOOK_LINKS_CONFIG);
  const [socialLinks] = useState<SocialLinksConfig>(SOCIAL_LINKS_CONFIG);
  
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [contactReason, setContactReason] = useState<string>('General Inquiry');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithReason = (reason?: string) => {
    if (reason) setContactReason(reason);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-[#ece8e0] selection:bg-[#c8a96e]/30 selection:text-[#faebd0] font-sans antialiased">
      
      {/* 1. Sticky Navigation Header */}
      <Navigation
        onOpenBuyModal={() => setIsBuyModalOpen(true)}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenBuyModal={() => setIsBuyModalOpen(true)}
          onExploreBook={() => scrollToSection('the-book')}
          onReadStory={() => scrollToSection('about')}
        />

        {/* 3. Hero Book Strip */}
        <HeroBookStrip
          bookLinks={bookLinks}
          onOpenBuyModal={() => setIsBuyModalOpen(true)}
          onOpenSample={() => setIsSampleModalOpen(true)}
        />

        {/* 4. The Book Section */}
        <BookSection
          bookLinks={bookLinks}
          onOpenBuyModal={() => setIsBuyModalOpen(true)}
          onOpenSample={() => setIsSampleModalOpen(true)}
        />

        {/* 5. About Section */}
        <AboutSection />

        {/* 6. My Journey Timeline */}
        <JourneyTimeline />

        {/* 7. BODHI Institutional Section */}
        <BodhiSection onOpenContact={handleOpenContactWithReason} />

        {/* 8. Women Leadership Section */}
        <WomenLeadershipSection />

        {/* 9. Strategy & Field Experience */}
        <StrategySection />

        {/* 10. Writings & Ideas */}
        <WritingsSection />

        {/* 11. Media • Press • Speaking */}
        <MediaSection />

        {/* 12. Gallery & Moments */}
        <GallerySection />

        {/* 13. From The Book (Archival Excerpts) */}
        <BookArchiveSample
          bookLinks={bookLinks}
          onOpenBuyModal={() => setIsBuyModalOpen(true)}
          onOpenSample={() => setIsSampleModalOpen(true)}
        />

        {/* 14. The Griglani Letter (Newsletter) */}
        <NewsletterSection />

        {/* 15. Contact / Let's Connect */}
        <ContactSection socialLinks={socialLinks} defaultReason={contactReason} />

        {/* 16. Ask Rajesh Anything (Conversational Knowledge Archive) */}
        <AskRajeshSection
          bookLinks={bookLinks}
          onOpenBuyModal={() => setIsBuyModalOpen(true)}
        />
      </main>

      {/* 17. Footer */}
      <Footer
        bookLinks={bookLinks}
        socialLinks={socialLinks}
        onOpenBuyModal={() => setIsBuyModalOpen(true)}
      />

      {/* Modals & Dialogs */}
      <BuyTheBookModal
        isOpen={isBuyModalOpen}
        onClose={() => setIsBuyModalOpen(false)}
        bookLinks={bookLinks}
        onOpenSample={() => setIsSampleModalOpen(true)}
      />

      <BookSampleModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        onOpenBuyModal={() => {
          setIsSampleModalOpen(false);
          setIsBuyModalOpen(true);
        }}
        bookLinks={bookLinks}
      />

      {/* Floating Action Button for Quick Book Purchase */}
      <div className="fixed bottom-6 right-6 z-30 hidden sm:block">
        <button
          onClick={() => setIsBuyModalOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#c8a96e] hover:bg-[#d8b879] text-[#0f1116] font-bold text-xs uppercase tracking-wider shadow-2xl hover:shadow-[0_0_20px_rgba(200,169,110,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          id="floating-buy-cta-btn"
        >
          <BookOpen className="w-4 h-4 text-[#0f1116]" />
          <span>BUY THE BOOK</span>
        </button>
      </div>

    </div>
  );
}

export default App;
