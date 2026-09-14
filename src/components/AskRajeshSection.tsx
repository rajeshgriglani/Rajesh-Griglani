import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, BookOpen, ExternalLink, MessageSquare, Compass, ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';
import { BookLinksConfig } from '../data/config';

interface AskRajeshSectionProps {
  bookLinks: BookLinksConfig;
  onOpenBuyModal: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  sourceType?: 'website' | 'book' | 'writings' | 'store';
  showRetailerButtons?: boolean;
}

export const AskRajeshSection: React.FC<AskRajeshSectionProps> = ({
  bookLinks,
  onOpenBuyModal,
}) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Welcome. You can ask any question about Rajesh Bhojraj Griglani, his political journey, grassroots strategy, leadership with the All India Mahila Congress, BODHI INSTITUTE, or his political memoir 'Roots of Resistance — The Ideological Battle for India’s Soul'.",
      sourceType: 'website',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const suggestedQuestions = [
    'What inspired Roots of Resistance?',
    'What is the story behind the book?',
    'What was Rajesh’s political journey?',
    'What is BODHI INSTITUTE?',
    'What did Rajesh learn from grassroots politics?',
    'Where can I buy the book?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Verified knowledge retrieval engine strictly based on approved site content
  const generateVerifiedResponse = (userQuery: string): { text: string; sourceType: 'website' | 'book' | 'writings' | 'store'; showRetailerButtons?: boolean } => {
    const q = userQuery.toLowerCase().trim();

    // 1. Book purchase intent
    if (
      q.includes('where can i buy') ||
      q.includes('buy the book') ||
      q.includes('buy book') ||
      q.includes('where is roots of resistance available') ||
      q.includes('amazon link') ||
      q.includes('flipkart link') ||
      q.includes('notion press link') ||
      q.includes('order book') ||
      q.includes('purchase') ||
      q.includes('hardcover') ||
      q.includes('store') ||
      q.includes('retailer')
    ) {
      return {
        text: "Roots of Resistance — The Ideological Battle for India’s Soul is available in hardcover across major national and international book retailers including Amazon, Notion Press, Flipkart, and Hugendubel (Europe).",
        sourceType: 'store',
        showRetailerButtons: true,
      };
    }

    // 2. Inspiration & story behind Roots of Resistance
    if (
      q.includes('inspire') ||
      q.includes('story behind') ||
      q.includes('what inspired') ||
      q.includes('why write') ||
      q.includes('naroda patiya') ||
      q.includes('2002') ||
      q.includes('driving license') ||
      q.includes('circumcised')
    ) {
      return {
        text: "Roots of Resistance — The Ideological Battle for India’s Soul was forged from Rajesh Bhojraj Griglani's direct encounter with communal violence during the 2002 Gujarat riots. On 28 February 2002 at Naroda Patiya, a mob stopped his vehicle demanding proof of religion. Producing his Driving License verified his name and spared his life—an event made even more perilous because he is circumcised for medical reasons.\n\nFrom that defining moment, Rajesh articulated the book's core premise: 'The secular republic is not an abstraction. It is the thing between you and the mob.' The memoir captures three decades of grassroots experience, partition memory, party candidness, and front-line secular defense.",
        sourceType: 'book',
      };
    }

    // 3. What is Roots of Resistance / Book Summary
    if (
      q.includes('what is the book') ||
      q.includes('about the book') ||
      q.includes('roots of resistance') ||
      q.includes('memoir') ||
      q.includes('excerpt') ||
      q.includes('publication')
    ) {
      return {
        text: "Roots of Resistance — The Ideological Battle for India’s Soul is a political memoir and ideological treatise by Rajesh Bhojraj Griglani (published 2024–2026). It documents thirty years of political engagement from Porbandar to New Delhi, analyzing the erosion of constitutional norms, the primacy of political memory, the mechanics of electoral war rooms, and the indispensable role of grassroots cadres in preserving India's pluralist democracy.",
        sourceType: 'book',
        showRetailerButtons: true,
      };
    }

    // 4. BODHI Institute
    if (
      q.includes('bodhi') ||
      q.includes('institute') ||
      q.includes('instinct') ||
      q.includes('intellect') ||
      q.includes('intuition') ||
      q.includes('pedagogy')
    ) {
      return {
        text: "BODHI INSTITUTE (Bureau of Developing Human Instincts, Intellect & Intuitions), founded by Rajesh Bhojraj Griglani, is an institutional framework dedicated to leadership development, political training, and human instinct mastery.\n\nIts foundational triad consists of:\n• INSTINCT (The Primal Sensor): Sensing voter sentiment, reading silent democratic currents, and crisis de-escalation on the ground.\n• INTELLECT (Structured Rigor): Micro-booth architecture, demographic data modeling, policy messaging, and war room systems.\n• INTUITION (High-Altitude Synthesis): Strategic narrative forecasting, reading political situations beyond conventional data, and long-term coalition vision.",
        sourceType: 'website',
      };
    }

    // 5. Political Journey & Milestones
    if (
      q.includes('journey') ||
      q.includes('political journey') ||
      q.includes('career') ||
      q.includes('timeline') ||
      q.includes('milestones') ||
      q.includes('history') ||
      q.includes('background')
    ) {
      return {
        text: "Rajesh Bhojraj Griglani's journey spans over three decades:\n\n• 1973: Born in Kutiyana, Porbandar, Gujarat into a 3rd Generation Congress family.\n• 1983–1990: Seven years at Sainik School Balachadi (Jamnagar), developing discipline and leadership.\n• 1991–1995: M.A. in Political Science (International Relations) from MSU Baroda.\n• 1996–Present: Member of the Indian National Congress; started grassroots operations in Gujarat alongside Shri Vitthalbhai Shah.\n• 2004: Transitioned to New Delhi for national strategy, briefings, and campaign coordination.\n• 2007–2017: Leadership and cadre training with Jawaharlal Nehru Leadership Institute (JNLI) across 15+ states.\n• 2018: Spearheaded 'SITARE' women's leadership initiatives with All India Mahila Congress across 8 states.\n• 2020–2024: Served on the National Executive Committee for Social Media, Indian National Congress (including the 2020 Bihar Social Media War Room).\n• 2021–2022: Formulated the Goa Assembly Election Management blueprint.\n• 2024–2026: Institutionalized BODHI INSTITUTE and published Roots of Resistance.",
        sourceType: 'website',
      };
    }

    // 6. Grassroots Politics / Learnings
    if (
      q.includes('grassroots') ||
      q.includes('learn') ||
      q.includes('lesson') ||
      q.includes('field') ||
      q.includes('ground') ||
      q.includes('booth') ||
      q.includes('war room')
    ) {
      return {
        text: "From thirty years in the field, Rajesh emphasizes that Indian elections are won in the unmeasurable realm of human trust and localized cadre morale—not on spreadsheets or television screens alone.\n\nKey principles documented on this website include:\n1. A booth committee of thirty dedicated local volunteers who personally know every household is more resilient than top-down advertising.\n2. When women organizers are given authentic strategic command rather than ceremonial roles, polling station defense becomes disciplined and enduring.\n3. Tactical opportunism may win isolated cycles, but only unyielding ideological clarity can build a movement capable of defending democratic pluralism.",
        sourceType: 'writings',
      };
    }

    // 7. Women Leadership / Mahila Congress / SITARE
    if (
      q.includes('women') ||
      q.includes('mahila') ||
      q.includes('sitare') ||
      q.includes('female')
    ) {
      return {
        text: "In 2018, Rajesh spearheaded 'SITARE', a flagship women's leadership development programme across India, collaborating closely with the All India Mahila Congress across Gujarat, Maharashtra, Rajasthan, Madhya Pradesh, Chhattisgarh, Uttarakhand, Haryana, and Goa.\n\nThe initiative focused on capacity-building to develop self-reliant women campaign leaders, booth-level commanders, and articulate public speakers who hold deep fidelity to household-level ground realities.",
        sourceType: 'website',
      };
    }

    // 8. Education / Academic Background
    if (
      q.includes('education') ||
      q.includes('school') ||
      q.includes('university') ||
      q.includes('college') ||
      q.includes('balachadi') ||
      q.includes('sainik') ||
      q.includes('msu') ||
      q.includes('baroda')
    ) {
      return {
        text: "Rajesh Bhojraj Griglani's academic foundations include:\n• 1983–1990: Sainik School Balachadi (Jamnagar, Gujarat) — Rigorous seven-year defence education instilling discipline, collective duty, and integrity.\n• 1991–1995: The Maharaja Sayajirao University of Baroda (MSU Baroda, Gujarat) — Completed an M.A. in Political Science with a specialization in International Relations, studying global constitutional democracies and systemic power dynamics.",
        sourceType: 'website',
      };
    }

    // 9. Lineage / Congress Legacy
    if (
      q.includes('lineage') ||
      q.includes('congress') ||
      q.includes('family') ||
      q.includes('generation') ||
      q.includes('heritage')
    ) {
      return {
        text: "Rajesh Bhojraj Griglani is a 3rd Generation Congressman with deep roots in post-Partition resilience and constitutional service. His family crossed the border during Partition carrying a profound reverence for India's secular republic.",
        sourceType: 'website',
      };
    }

    // 10. Goa Election / Bihar War Room / Elections Managed
    if (
      q.includes('goa') ||
      q.includes('bihar') ||
      q.includes('state blueprint') ||
      q.includes('election management')
    ) {
      return {
        text: "Documented electoral management roles include:\n• 2020: Bihar Social Media War Room during the Bihar Assembly Election as part of the National Executive Committee for Social Media, Indian National Congress.\n• 2021–2022: Goa Assembly Election Management, where Rajesh formulated the state-wide operational blueprint, overseeing real-time war rooms, booth-level micro-structuring, and voter outreach operations.",
        sourceType: 'website',
      };
    }

    // 11. Quote / Political Memory / Philosophy
    if (
      q.includes('quote') ||
      q.includes('memory') ||
      q.includes('philosophy') ||
      q.includes('secular') ||
      q.includes('constitution')
    ) {
      return {
        text: "Rajesh's core philosophy centers on political memory and constitutional vigilance: 'Political memory is not just about what happened. It is about what we choose to remember.'\n\nHe contends that when historical memory is sanitized, the secular republic becomes a fragile abstraction. Defending India's democratic soul requires continuous cadre training and unyielding constitutional consciousness.",
        sourceType: 'writings',
      };
    }

    // Fallback when not documented
    return {
      text: "I don't have verified information about that on this website.",
      sourceType: 'website',
    };
  };

  const handleSend = (textToSend?: string) => {
    const question = textToSend || query;
    if (!question.trim() || isLoading) return;

    const userMessageId = `user-${Date.now()}`;
    const newUserMessage: Message = {
      id: userMessageId,
      sender: 'user',
      text: question.trim(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setQuery('');
    setIsLoading(true);

    // Simulate refined typing response
    setTimeout(() => {
      const response = generateVerifiedResponse(question);
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        sourceType: response.sourceType,
        showRetailerButtons: response.showRetailerButtons,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'assistant',
        text: "Welcome. You can ask any question about Rajesh Bhojraj Griglani, his political journey, grassroots strategy, leadership with the All India Mahila Congress, BODHI INSTITUTE, or his political memoir 'Roots of Resistance — The Ideological Battle for India’s Soul'.",
        sourceType: 'website',
      },
    ]);
  };

  return (
    <section
      id="ask-anything"
      className="py-20 sm:py-28 bg-[#0b0c10] border-t border-[#1e222c] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c8a96e]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#161a24]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Headline & Introduction */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181b23] border border-[#2b3040] text-[#c8a96e] text-xs font-semibold tracking-wider uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Conversational Archive</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                ASK ANYTHING
              </h2>
              
              <div className="w-16 h-0.5 bg-[#c8a96e] mt-4 mb-5" />
              
              <p className="font-serif text-lg text-[#ece5d8] leading-relaxed">
                Have a question about Rajesh Bhojraj Griglani, his journey, political experience, leadership work, BODHI INSTITUTE, or Roots of Resistance?
              </p>
            </div>

            <p className="text-sm text-[#9c9586] leading-relaxed">
              Ask your question below. This conversational reader retrieves verified records directly from Rajesh’s biography, historical timeline, field archives, and published memoirs.
            </p>

            {/* Knowledge Integrity Seal */}
            <div className="p-4 rounded-xl bg-[#12141c] border border-[#222734] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c8a96e]">
                <ShieldCheck className="w-4 h-4 text-[#c8a96e]" />
                <span>Verified Website & Book Knowledge Base</span>
              </div>
              <p className="text-xs text-[#827b6d] leading-relaxed">
                Answers are grounded strictly in approved documentation without artificial speculation or personal assumptions.
              </p>
            </div>

            {/* Quick Actions / Reset */}
            <div className="pt-2 flex items-center gap-4 text-xs text-[#8f887a]">
              <button
                onClick={handleResetChat}
                className="inline-flex items-center gap-1.5 hover:text-[#c8a96e] transition-colors py-1 px-2 rounded bg-[#161822] border border-[#242936]"
                id="reset-chat-btn"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Restart Conversation</span>
              </button>
              <span>•</span>
              <button
                onClick={onOpenBuyModal}
                className="inline-flex items-center gap-1.5 hover:text-[#c8a96e] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#c8a96e]" />
                <span>Direct Book Links</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Conversational Interface */}
          <div className="lg:col-span-7 flex flex-col bg-[#12141a] rounded-2xl border border-[#242834] shadow-2xl overflow-hidden min-h-[520px]">
            
            {/* Conversation Header Bar */}
            <div className="px-5 py-4 bg-[#161822] border-b border-[#242834] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#202534] border border-[#363c4e] flex items-center justify-center text-[#c8a96e] font-serif font-bold text-sm">
                  RG
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    Rajesh Bhojraj Griglani — Knowledge Assistant
                  </h3>
                  <p className="text-[11px] text-[#8e8779]">
                    Trained strictly on verified publications, timeline & archives
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 text-[11px] text-[#4ade80] bg-[#12241a] px-2.5 py-1 rounded-full border border-[#1e462c]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                <span>Active</span>
              </div>
            </div>

            {/* Conversation Scroll Container */}
            <div
              className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-4 max-h-[380px] sm:max-h-[420px] scrollbar-thin scrollbar-thumb-[#232734] scrollbar-track-transparent"
              id="conversation-history-container"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  {/* Sender Tag */}
                  <span className="text-[10px] uppercase tracking-wider text-[#736c5f] mb-1 px-1">
                    {msg.sender === 'user' ? 'You' : 'Rajesh Bhojraj Griglani Assistant'}
                  </span>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[90%] sm:max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#c8a96e] text-[#0f1116] font-medium rounded-tr-sm shadow-md'
                        : 'bg-[#181a24] text-[#ece5d8] border border-[#282d3c] rounded-tl-sm shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Source citation badge */}
                    {msg.sourceType && msg.sender === 'assistant' && (
                      <div className="mt-3 pt-2 border-t border-[#292f3e] flex items-center gap-2 text-[10px] text-[#a19989]">
                        <CheckCircle2 className="w-3 h-3 text-[#c8a96e]" />
                        <span>
                          {msg.sourceType === 'book'
                            ? 'Source: Roots of Resistance Memoir & Excerpts'
                            : msg.sourceType === 'writings'
                            ? 'Source: Published Essays & Ideological Papers'
                            : msg.sourceType === 'store'
                            ? 'Source: Verified Retailer Distribution'
                            : 'Source: Official Website Documentation & Timeline'}
                        </span>
                      </div>
                    )}

                    {/* Dynamic Retailer Purchase Buttons if Intent Detected */}
                    {msg.showRetailerButtons && (
                      <div className="mt-4 pt-3 border-t border-[#282d3e] space-y-2">
                        <p className="text-xs font-semibold text-[#c8a96e] uppercase tracking-wider">
                          Official Retailer Links:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-1">
                          {/* Amazon */}
                          {bookLinks.amazon.enabled && (
                            <a
                              href={bookLinks.amazon.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-2 rounded-lg bg-[#202534] hover:bg-[#2c3246] border border-[#343b4f] text-xs font-medium text-white flex items-center justify-between transition-colors group"
                            >
                              <span>Amazon</span>
                              <ExternalLink className="w-3 h-3 text-[#c8a96e] group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          )}

                          {/* Notion Press */}
                          {bookLinks.notionPress.enabled && (
                            <a
                              href={bookLinks.notionPress.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-2 rounded-lg bg-[#202534] hover:bg-[#2c3246] border border-[#343b4f] text-xs font-medium text-white flex items-center justify-between transition-colors group"
                            >
                              <span>Notion Press</span>
                              <ExternalLink className="w-3 h-3 text-[#c8a96e] group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          )}

                          {/* Flipkart */}
                          {bookLinks.flipkart.enabled && (
                            <a
                              href={bookLinks.flipkart.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-2 rounded-lg bg-[#202534] hover:bg-[#2c3246] border border-[#343b4f] text-xs font-medium text-white flex items-center justify-between transition-colors group"
                            >
                              <span>Flipkart</span>
                              <ExternalLink className="w-3 h-3 text-[#c8a96e] group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          )}

                          {/* Hugendubel (Europe / Germany) */}
                          {bookLinks.hugendubel && bookLinks.hugendubel.enabled && (
                            <a
                              href={bookLinks.hugendubel.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-2 rounded-lg bg-[#202534] hover:bg-[#2c3246] border border-[#343b4f] text-xs font-medium text-white flex items-center justify-between transition-colors group"
                            >
                              <span>Hugendubel (EU)</span>
                              <ExternalLink className="w-3 h-3 text-[#c8a96e] group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          )}

                          {/* Other Retailers / Modal */}
                          <button
                            onClick={onOpenBuyModal}
                            className="px-3 py-2 rounded-lg bg-[#2a2318] hover:bg-[#382f1f] border border-[#52442b] text-xs font-semibold text-[#f0d49b] flex items-center justify-between transition-colors"
                          >
                            <span>All Stores</span>
                            <BookOpen className="w-3 h-3 text-[#f0d49b]" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-wider text-[#736c5f] mb-1 px-1">
                    Assistant
                  </span>
                  <div className="bg-[#181a24] border border-[#282d3c] rounded-2xl rounded-tl-sm p-4 text-xs text-[#a09888] flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#c8a96e] animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 rounded-full bg-[#c8a96e] animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-[#c8a96e] animate-bounce" />
                    </div>
                    <span>Consulting verified biographical & book archives...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Question Chips */}
            <div className="px-5 py-3 bg-[#151720] border-t border-[#222634] overflow-x-auto">
              <span className="text-[10px] font-semibold text-[#80796c] uppercase tracking-wider block mb-2">
                Suggested Questions:
              </span>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((sug, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(sug)}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#1c202c] hover:bg-[#272d3e] text-[#ded7c8] hover:text-[#faedd4] border border-[#2d3344] transition-all text-left truncate max-w-full"
                  >
                    “{sug}”
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form Box */}
            <div className="p-4 sm:p-5 bg-[#171924] border-t border-[#252a38]">
              <div className="relative flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-end">
                <textarea
                  ref={textareaRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything about Rajesh, his journey, work or book..."
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl bg-[#0e1017] border border-[#2b3040] focus:border-[#c8a96e] focus:ring-1 focus:ring-[#c8a96e] text-sm text-[#f0ece1] placeholder-[#6d675b] resize-none outline-none transition-all"
                  id="ask-rajesh-input"
                />

                <button
                  onClick={() => handleSend()}
                  disabled={!query.trim() || isLoading}
                  className="px-6 py-3 rounded-xl bg-[#c8a96e] hover:bg-[#d8b879] disabled:bg-[#282a34] disabled:text-[#635e53] text-[#0f1116] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shrink-0 h-[48px]"
                  id="ask-rajesh-submit-btn"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>ASK</span>
                </button>
              </div>
              
              <div className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#696356] gap-1">
                <span className="hidden sm:inline">Press Enter to send (Shift + Enter for new line)</span>
                <span>Direct answers from verified archives • Privacy-safe</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
