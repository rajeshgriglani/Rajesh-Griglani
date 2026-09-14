import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, ShieldCheck, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    focusArea: 'Political Strategy & Discourse',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="relative py-20 lg:py-28 bg-[#0a0b0e] text-[#ece8e0] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c8a96e]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-5 sm:p-10 lg:p-14 rounded-2xl sm:rounded-3xl bg-[#12141a] border border-[#2c3140] shadow-2xl space-y-8 text-center relative overflow-hidden">
          {/* Top subtle gold highlight */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#c8a96e] to-transparent" />

          {/* Header */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1c202a] border border-[#2e3342] text-xs font-semibold tracking-[0.25em] text-[#c8a96e] uppercase">
              <Mail className="w-3.5 h-3.5" /> THE OFFICIAL NEWSLETTER
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              THE GRIGLANI LETTER
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#c8a96e]">
              Periodic Reflections on Politics, Strategy, Leadership and India
            </p>
            <p className="text-xs sm:text-sm text-[#9c9586] leading-relaxed pt-1">
              Receive insightful essays on democratic memory, constitutional developments, grassroots cadre organization, and upcoming book events directly from Rajesh Bhojraj Griglani.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#161922] border border-[#2f3544] space-y-3 max-w-md mx-auto animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-[#c8a96e]/15 border border-[#c8a96e]/30 text-[#c8a96e] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Subscription Confirmed
              </h3>
              <p className="text-xs text-[#ded8cb]">
                Thank you, <strong className="text-white">{formData.name || 'Friend'}</strong>. You have been added to the private reader list for The Griglani Letter.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-[#c2bbb0] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1015] border border-[#272b38] text-sm text-[#f5f2ea] focus:border-[#c8a96e] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#c2bbb0] mb-1">
                    Email Address <span className="text-[#c8a96e]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1015] border border-[#272b38] text-sm text-[#f5f2ea] focus:border-[#c8a96e] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-[#c2bbb0] mb-1">
                    State / City (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. New Delhi / Gujarat"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1015] border border-[#272b38] text-sm text-[#f5f2ea] focus:border-[#c8a96e] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#c2bbb0] mb-1">
                    Primary Interest Focus
                  </label>
                  <select
                    value={formData.focusArea}
                    onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1015] border border-[#272b38] text-sm text-[#f5f2ea] focus:border-[#c8a96e] focus:outline-none"
                  >
                    <option value="Political Strategy & Discourse">Political Strategy & Discourse</option>
                    <option value="BODHI & Leadership Pedagogy">BODHI & Leadership Pedagogy</option>
                    <option value="Roots of Resistance Book Updates">Roots of Resistance Book Updates</option>
                    <option value="Women Leadership & Grassroots">Women Leadership & Grassroots</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#c8a96e] hover:bg-[#d8b879] text-[#111318] font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 mt-2"
                id="newsletter-submit-btn"
              >
                <Send className="w-4 h-4" /> SUBSCRIBE TO THE LETTER
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#7e776a] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c8a96e]" />
                <span>No spam. Unsubscribe anytime. Thoughtful essays sent directly to your inbox.</span>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
