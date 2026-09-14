import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { SocialLinksConfig } from '../data/config';

interface ContactSectionProps {
  socialLinks: SocialLinksConfig;
  defaultReason?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  socialLinks,
  defaultReason = 'General Inquiry',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    reason: defaultReason,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#0d0e12] text-[#ece8e0] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#c8a96e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181a22] border border-[#2d3240] text-xs font-semibold tracking-[0.25em] text-[#c8a96e] uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5" /> ENGAGEMENT & DIALOGUE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            LET'S CONNECT
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-[#c8a96e] mt-2">
            Invitations for Keynote Speaking, BODHI Masterclasses & Literary Engagements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Contact Coordinates & Official Channels */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            <div className="p-5 sm:p-8 rounded-2xl bg-[#13151c] border border-[#262b38] space-y-6 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-white">
                Office & Direct Coordinates
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded bg-[#1e222c] text-[#c8a96e] border border-[#2d3240]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#8f887a] block text-xs uppercase tracking-wider">Official Email</span>
                    <a href="mailto:rajesh.griglani@inc.in" className="text-[#f5f2ea] hover:text-[#c8a96e] font-medium transition-colors">
                      rajesh.griglani@inc.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded bg-[#1e222c] text-[#c8a96e] border border-[#2d3240]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#8f887a] block text-xs uppercase tracking-wider">Locations</span>
                    <span className="text-[#ded8cb]">
                      New Delhi & Vadodara, Gujarat, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#222530] text-xs text-[#9d9586] leading-relaxed">
                <strong className="text-[#ded8cb] block mb-1">Direct Review Note:</strong>
                All formal speaking invitations, media interviews, and BODHI institutional training inquiries are reviewed by Rajesh Bhojraj Griglani's office within 48 hours.
              </div>
            </div>

            {/* Public Broadcasts & Social Channels */}
            <div className="p-6 rounded-2xl bg-[#13151c] border border-[#262b38] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#c8a96e] font-semibold block">
                  Official Channels & Broadcasts
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#181a22] text-[#8e8779] border border-[#282d3b]">
                  8 Channels
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#181a22] hover:bg-[#20232c] border border-[#282d3b] hover:border-[#c8a96e]/50 text-xs font-medium text-[#ded8ca] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-white transition-colors">X (Twitter)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8e8779] group-hover:text-[#c8a96e] transition-colors" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#181a22] hover:bg-[#20232c] border border-[#282d3b] hover:border-[#c8a96e]/50 text-xs font-medium text-[#ded8ca] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-white transition-colors">Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8e8779] group-hover:text-[#c8a96e] transition-colors" />
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#181a22] hover:bg-[#20232c] border border-[#282d3b] hover:border-[#c8a96e]/50 text-xs font-medium text-[#ded8ca] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-white transition-colors">Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8e8779] group-hover:text-[#c8a96e] transition-colors" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#181a22] hover:bg-[#20232c] border border-[#282d3b] hover:border-[#c8a96e]/50 text-xs font-medium text-[#ded8ca] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-white transition-colors">LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8e8779] group-hover:text-[#c8a96e] transition-colors" />
                </a>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#181a22] hover:bg-[#20232c] border border-[#282d3b] hover:border-[#c8a96e]/50 text-xs font-medium text-[#ded8ca] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-white transition-colors">YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8e8779] group-hover:text-[#c8a96e] transition-colors" />
                </a>
                <a
                  href={socialLinks.imdb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#181a22] hover:bg-[#20232c] border border-[#282d3b] hover:border-[#c8a96e]/50 text-xs font-medium text-[#ded8ca] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-[#e2b616] transition-colors">IMDb Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8e8779] group-hover:text-[#e2b616] transition-colors" />
                </a>
                <a
                  href={socialLinks.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#181a22] hover:bg-[#20232c] border border-[#282d3b] hover:border-[#c8a96e]/50 text-xs font-medium text-[#ded8ca] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-[#25D366] transition-colors">WhatsApp Channel</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8e8779] group-hover:text-[#25D366] transition-colors" />
                </a>
                <a
                  href={socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#181a22] hover:bg-[#20232c] border border-[#282d3b] hover:border-[#c8a96e]/50 text-xs font-medium text-[#ded8ca] hover:text-white flex items-center justify-between transition-colors min-h-[44px] group"
                >
                  <span className="group-hover:text-[#229ED9] transition-colors">Telegram Channel</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8e8779] group-hover:text-[#229ED9] transition-colors" />
                </a>
              </div>

              <p className="text-[11px] text-[#8e8779] pt-1">
                Follow the <a href={socialLinks.whatsappChannel} target="_blank" rel="noopener noreferrer" className="text-[#c8a96e] hover:underline">Rajesh Griglani channel on WhatsApp</a> for verified public statements.
              </p>
            </div>

          </div>

          {/* RIGHT: Engagement Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-[#13151c] border border-[#282d3c] shadow-2xl space-y-6 text-left">
              
              <h3 className="font-serif text-2xl font-bold text-white">
                Dispatch an Official Inquiry
              </h3>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#161922] border border-[#2f3544] text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#c8a96e]/15 border border-[#c8a96e]/30 text-[#c8a96e] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-[#ded8cb]">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding <em>{formData.reason}</em> has been forwarded to Rajesh Bhojraj Griglani's office.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        organization: '',
                        reason: 'General Inquiry',
                        message: '',
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded bg-[#202430] text-xs font-semibold text-[#c8a96e] hover:bg-[#282d3d]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#c0b9ab] mb-1">
                        Your Full Name <span className="text-[#c8a96e]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Alok Mathur"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1015] border border-[#282c39] text-sm text-[#f5f2ea] focus:border-[#c8a96e] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#c0b9ab] mb-1">
                        Email Address <span className="text-[#c8a96e]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alok@institution.org"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1015] border border-[#282c39] text-sm text-[#f5f2ea] focus:border-[#c8a96e] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#c0b9ab] mb-1">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1015] border border-[#282c39] text-sm text-[#f5f2ea] focus:border-[#c8a96e] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#c0b9ab] mb-1">
                        Organization / Affiliation
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Foundation / University / Committee"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1015] border border-[#282c39] text-sm text-[#f5f2ea] focus:border-[#c8a96e] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#c0b9ab] mb-1">
                      Reason for Reaching Out <span className="text-[#c8a96e]">*</span>
                    </label>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1015] border border-[#282c39] text-sm text-[#f5f2ea] focus:border-[#c8a96e] focus:outline-none"
                    >
                      <option value="Keynote Speaking & Key Addresses">Keynote Speaking & Key Addresses</option>
                      <option value="BODHI Institutional Workshop">BODHI Institutional Workshop</option>
                      <option value="Political Strategy & Cadre Training">Political Strategy & Cadre Training</option>
                      <option value="Women Leadership Mentorship">Women Leadership Mentorship</option>
                      <option value="Media Interview / Literary Review">Media Interview / Literary Review</option>
                      <option value="Roots of Resistance Book Inquiries">Roots of Resistance Book Inquiries</option>
                      <option value="General Message">General Message</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#c0b9ab] mb-1">
                      Message & Event Details <span className="text-[#c8a96e]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the nature of your invitation, proposed dates, audience, or inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1015] border border-[#282c39] text-sm text-[#f5f2ea] focus:border-[#c8a96e] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-[#c8a96e] hover:bg-[#d8b879] text-[#111318] font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                    id="contact-submit-btn"
                  >
                    <Send className="w-4 h-4" /> SEND INQUIRY TO OFFICE
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
