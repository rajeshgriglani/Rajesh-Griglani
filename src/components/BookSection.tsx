import React, { useState } from 'react';
import { BookOpen, Sparkles, Shield, Bookmark, ExternalLink } from 'lucide-react';
import { BookLinksConfig } from '../data/config';
import { BuyTheBookButtons } from './BuyTheBookButtons';
import bookCover from '../assets/images/large.webp';

interface BookSectionProps {
  bookLinks: BookLinksConfig;
  onOpenBuyModal: () => void;
  onOpenSample?: () => void;
}

const OPENING_SAMPLE = `CHAPTER 1

THE INHERITANCE OF FIRE

What It Means to Be a Congress Worker

“Theirs not to make reply, theirs not to reason why, theirs but to do and die.”

Alfred Lord Tennyson, Charge of the Light Brigade


I learnt those lines when I was 14 years old at Sainik School Balachadi, on the Gulf of Kutch in Saurashtra. The school occupied 400 acres on a coastal estate, flanked by a natural beach and the Arabian Sea. When the wind came off the water, it scattered papers from desks and made ceiling fans irrelevant. We lived by a schedule so rigorous it became, over 7 years, a second nature: up at dawn for PT and parade, through breakfast in khaki uniform, through lessons and lunch and a mandatory hour’s rest, through compulsory sport in the afternoon and evening study and dinner, lights out at ten-thirty. No matter the season. No matter the weather. The school did not negotiate with the calendar.

That regime taught me something I could not have articulated as a boy but that I understand now: discipline is not the enemy of freedom. It is its precondition. You cannot will yourself to do something difficult without having first built the habit of doing difficult things. This, I have come to believe, is also true of political conviction.

We recited the Tennyson with the collective voice of a hundred boys who did not yet understand what the words meant. We learnt them as poetry. Later, I learnt them as a creed. And later still, I understood something that Tennyson himself could not have intended but that I believe with everything I have: sometimes, the bravest thing is not to die but to stay.

When I say I have been in Congress for 30 years, I say it without the chest-thumping pride of a man claiming medals. I say it the way a river talks about its source, with a quiet certainty about where it comes from and where it is going.

“I am not in Congress with my eyes closed,” I tell people who ask. “I am in Congress because I have thought about it. Because the reasons are solid.”

This distinction matters more than it might appear. Indian politics is full of people who belong to parties the way they belong to cricket teams: by birth, by social pressure, by the accident of geography. They wave flags, attend rallies, and perform loyalty as a kind of tribal membership. But they have never actually sat down and asked: what does this party stand for? What does it mean to carry this symbol?

I have asked those questions. And the answers brought me back to Congress every single time I was tempted to leave, every time the road got hard, every time colleagues abandoned ship for more comfortable harbours.

Congress, I argue, is not simply a political party. It is the repository of a particular idea of India. An idea forged not in boardrooms or temples or military barracks but in the crucible of a freedom struggle that lasted nearly a century. The leaders who shaped Congress were not small men pursuing small ambitions. Mahatma Gandhi remade the moral vocabulary of politics by insisting that the ends never justify the means: that the quality of the journey defines the destination. Jawaharlal Nehru dreamed of a modern, scientific, industrialised India that would still make room for its poets and peasants. Ambedkar carried the weight of a caste system that had crushed millions for millennia and channelled that weight into a constitutional architecture of radical equality. Sardar Patel moved with the cold efficiency of a surgeon to stitch together 562 princely states into a single republic.

These were not ordinary people. And the party they built was not an ordinary institution.

“The roots of Congress are very strong,” I say. “Because the leaders who planted and watered those roots had very strong character.”

• • •

This is the inheritance that Congress workers carry. Not privilege, not power, though Congress has held both. But a moral and historical weight that makes it impossible, for those who understand it, to simply walk away.

I have watched friends leave. Resentment for something not achieved, impatience with the timeline of change, the seductive warmth of the party that is in power: these things pull people away. I have watched the departures of politicians who once spoke the language of service and left for the language of access. I do not judge them with cruelty. I understand the human pull. But I cannot follow.

“My life mission is not compatible with compromise. I can be hungry. I can be powerless. I can wait. But I cannot be false.”

In a political culture where opportunism is normalised and loyalty is treated as naivety, this kind of conviction is almost radical. Almost eccentric. But it is also, I insist, entirely rational. Because if you believe, really believe, that the welfare of the many is more important than the comfort of the few, then you cannot serve that belief by joining the party that has systematically dismantled welfare in favour of cronyism.

To be a Congress worker today is to be a keeper of a flame that the wind has tried, many times, to extinguish. It is to stand in a long line of people who believed in something larger than themselves and paid a price for that belief. The freedom fighters who went to jail for years, who gave up careers and families and sometimes lives, did not see an independent India in their lifetimes. But they kept working.

I see myself in that lineage, not with grandiosity, but with simplicity. “We are still marching,” I say. “The destination has not changed.”

For me, the journey is the destination.

• • •

I want to say something about what political conviction costs in contemporary India, because I think it is underestimated by people who have not lived it from the inside.

A Congress worker in Gujarat in 2026 is not a person with a comfortable story to tell at dinner parties. We are in a state that has not had a Congress government in 30 years. Our workers receive no patronage, no access, no job referrals, no contracts. What they receive is the satisfaction of principle, which is a real satisfaction, but it does not pay the rent.

I have watched talented people leave the party not because they disagreed with its ideology but because they were exhausted: exhausted by fighting in a state where the institutional machinery is entirely against you, where the press is captured, where the district administration serves one political master, where your opponents have resources that could fund a small army.

Staying in those circumstances is an act of will that requires constant renewal. I renew it by returning to the reason I began. I remember my grandfather, who came from Karachi with a Congress card and chose, in the wreckage of Partition, to believe in a secular republic over a Hindu nation. I remember my father’s phone call on the morning of 27 February 2002, warning me of what was coming. I remember the burning road, and the wallet, and the cold knowledge that the secular republic I believe in is not an abstraction. It is the thing between you and the mob. When it fails, people die. When it holds, people live.

That is why I stay. Not because staying is easy. Because the alternative is worse.

• • •

The poet Faiz Ahmed Faiz wrote, in his immortal nazm, Aaj Bazaar Mein Pa-Ba-Jaulan Chalo:

Come, come today to the marketplace in chains,
With dust on your faces and blood on your sleeves,
Come, come today to the marketplace.
The city of pain calls you today,
The condemned and the exiled call you,
The friend calls you today to the marketplace.
Bring what heart you have, bring your torn collars,
Bring even affliction if you have no gifts,
Come, come today to the marketplace.

I first encountered Faiz as a young student. I have thought about him every time Congress seemed to be walking in chains. The poet knew something the politician must learn: that to march in the marketplace, even shackled, even wounded, is not defeat. It is testimony. It is the act of showing the world that you have not surrendered to what it wanted you to become.

That is what a Congress worker is. A witness. A marcher. Someone who came to the marketplace anyway.

• • •

I have sometimes been asked to name the moment when I became irreversibly a Congress worker rather than simply someone sympathetic to the Congress idea. The honest answer is that it was not a single moment but a series of accumulations: each defeat that did not break me, each departure of a colleague that I did not follow, each conversation with a voter who saw in the party something worth defending even when the party’s own behaviour did not deserve it.

But if I had to choose one moment, it would be an evening in the summer of 2004, the year of the UPA’s unexpected victory, when I was in Baroda, and the results were coming in. Seat after seat that we had written off was coming through for Congress. The room I was in, a district party office with a television brought in from a worker’s home, was full of people who had not yet allowed themselves to believe what they were seeing. And then the moment came when the tally was clear enough that there was no room for doubt, and the people in that room, workers who had spent years in Gujarat without a Congress government, without patronage, without the institutional infrastructure that power provides, began to weep.

I did not weep. I am not a person who weeps easily. But I understood, watching those people, what the work had been for. Not for power in the abstract. For this: for the confirmation that the India they believed in was real, that the electorate was capable of choosing differently, that the long march had not been in vain. That confirmation, even temporary, even partial, was worth 30 years of showing up.`;

export const BookSection: React.FC<BookSectionProps> = ({
  bookLinks,
  onOpenBuyModal,
  onOpenSample,
}) => {
  const [isSampleOpen, setIsSampleOpen] = useState(false);

  return (
    <section 
      id="the-book" 
      className="relative py-20 lg:py-28 bg-[#0a0b0d] text-[#ece8df] overflow-hidden"
    >
      {/* Editorial backdrop accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#c8a96e]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#171b26]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Eyebrow */}
        <div className="flex flex-col items-center text-center mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181b24] border border-[#2c313e] text-xs font-semibold tracking-[0.25em] text-[#c8a96e] uppercase mb-3">
            <Bookmark className="w-3.5 h-3.5" /> MAJOR PUBLICATION & MEMOIR
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#faf7f0]">
            ROOTS OF RESISTANCE
          </h2>
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#c8a96e] mt-2">
            The Ideological Battle for India's Soul
          </p>
        </div>

        {/* Major Editorial 2-Column Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: 3D Hardcover Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm lg:max-w-md group">
              
              {/* Outer shadow pedestal */}
              <div className="relative p-4 sm:p-6 rounded-2xl bg-[#12141a] border border-[#2b303d] shadow-2xl transition-all duration-500 group-hover:border-[#c8a96e]/50">
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#3e4456] bg-[#1a1c24]">
                  <img
                    src={bookCover}
                    alt="Roots of Resistance Hardcover Book Cover"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle sheen highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/10 opacity-60 pointer-events-none" />
                </div>

                {/* Metadata Pill under book */}
                <div className="mt-5 p-3 rounded-lg bg-[#0e1014] border border-[#21242d] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#8e8779] block text-[10px] uppercase tracking-wider">Format</span>
                    <span className="text-[#f5f1e8] font-medium">Collector's Hardcover</span>
                  </div>
                  <div>
                    <span className="text-[#8e8779] block text-[10px] uppercase tracking-wider">Pages / Language</span>
                    <span className="text-[#f5f1e8] font-medium">198 pages • English</span>
                  </div>
                  <div>
                    <span className="text-[#8e8779] block text-[10px] uppercase tracking-wider">Author</span>
                    <span className="text-[#c8a96e] font-medium">R. B. Griglani</span>
                  </div>
                </div>
              </div>

              {/* Sample excerpt button under book */}
              <div className="mt-4 flex justify-center w-full">
                <button
                  onClick={() => {
                    onOpenSample?.();
                  }}
                  className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#c8a96e] hover:text-[#faebd0] transition-colors py-2.5 px-4 rounded bg-[#161820] hover:bg-[#20232c] border border-[#2f3442] min-h-[44px]"
                  id="book-section-read-sample-btn"
                >
                  <BookOpen className="w-3.5 h-3.5" /> Read Opening Sample Excerpt
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT: Major Narrative Content */}
          <div className="lg:col-span-7 flex flex-col space-y-7 text-left">
            
            {/* Book Meta tags */}
            <div className="flex flex-wrap gap-2.5 items-center">
              <span className="px-3 py-1 rounded text-xs font-medium bg-[#1a1d26] text-[#dfd9cc] border border-[#2c3140]">
                Genre: <strong className="text-white">Political Memoir / Narrative Nonfiction</strong>
              </span>
              <span className="px-3 py-1 rounded text-xs font-medium bg-[#1a1d26] text-[#dfd9cc] border border-[#2c3140]">
                Format: <strong className="text-white">Hardcover</strong>
              </span>
              <span className="px-3 py-1 rounded text-xs font-medium bg-[#1a1d26] text-[#dfd9cc] border border-[#2c3140]">
                Author: <strong className="text-[#c8a96e]">Rajesh Bhojraj Griglani</strong>
              </span>
            </div>

            {/* Prominent Lead Quote */}
            <div className="relative pl-6 border-l-3 border-[#c8a96e] py-1 bg-gradient-to-r from-[#c8a96e]/10 to-transparent p-4 rounded-r-lg">
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#faf7f0] leading-snug">
                "The secular republic is not an abstraction.
                It is the thing between you and the mob."
              </p>
            </div>

            {/* The 2002 Naroda Patiya Story Passage */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#12141a] border border-[#272c38] space-y-4 text-sm sm:text-base leading-relaxed text-[#ded8cb]">
              <p className="text-[#f5f1e8] font-normal">
                On 28 February 2002, a mob stopped my car on a burning road in Naroda Patiya and demanded proof that I was a Hindu. I reached into my pocket and pulled out my wallet. I showed my Driving License. My name alone was enough. Had I forgotten my wallet, they would have stripped me to check my identity — and I wouldn't have been alive to tell this story, because I am circumcised for medical reasons.
              </p>
              
              <div className="font-serif italic text-lg text-[#c8a96e] font-semibold">
                "That's the book."
              </div>

              <p className="text-[#c4bdb0]">
                Roots of Resistance is my memoir of a Gujarat-born Congress worker from a family that came during Partition, who carried both identity and ideology through the 2002 riots, the 2014 upheaval, and the continuing fight to defend India's constitutional soul.
              </p>

              <p className="text-[#c4bdb0]">
                Part memoir, part warning, it is a fearless witness to what is at stake when secular values come under siege.
              </p>
            </div>

            {/* Closing Triad */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-lg bg-[#0e1014] border border-[#232732] text-center">
              <div className="p-2 border-b sm:border-b-0 sm:border-r border-[#222630]">
                <span className="font-serif text-sm sm:text-base font-bold text-[#faf7f0] block">Honest</span>
                <span className="text-xs text-[#9b9485]">about Failure.</span>
              </div>
              <div className="p-2 border-b sm:border-b-0 sm:border-r border-[#222630]">
                <span className="font-serif text-sm sm:text-base font-bold text-[#faf7f0] block">Rigorous</span>
                <span className="text-xs text-[#9b9485]">about Truth.</span>
              </div>
              <div className="p-2">
                <span className="font-serif text-sm sm:text-base font-bold text-[#c8a96e] block">Savage</span>
                <span className="text-xs text-[#9b9485]">about the Stakes.</span>
              </div>
            </div>

            {/* Purchase CTA and Retailer Buttons */}
            <div className="pt-3 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#c8a96e] font-semibold">
                  Purchase Official Hardcover Edition:
                </span>
                <button
                  onClick={onOpenBuyModal}
                  className="text-xs text-[#c8a96e] hover:underline"
                >
                  View all platforms
                </button>
              </div>

              {/* Retailer Buttons Component */}
              <div className="w-full">
                <BuyTheBookButtons bookLinks={bookLinks} variant="grid" />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* OPENING SAMPLE MODAL                                      */}
      {/* ========================================================= */}
      {isSampleOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="opening-sample-title"
          onClick={() => setIsSampleOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl bg-[#0d0f13] border border-[#3a3e4a] shadow-[0_30px_100px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between gap-4 px-5 sm:px-8 py-5 bg-[#101218]/95 backdrop-blur-xl border-b border-[#292d37]">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#c8a96e] font-semibold">
                  Opening Sample Excerpt
                </p>
                <h3
                  id="opening-sample-title"
                  className="font-serif text-xl sm:text-2xl font-bold text-[#faf7f0] mt-1"
                >
                  The Inheritance of Fire
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsSampleOpen(false)}
                aria-label="Close opening sample"
                className="flex-shrink-0 w-10 h-10 rounded-full border border-[#363b47] bg-[#181b22] text-[#c8a96e] hover:text-white hover:bg-[#232731] transition-colors text-xl"
              >
                ×
              </button>
            </div>

            {/* Modal Reading Area */}
            <div className="overflow-y-auto max-h-[calc(92vh-90px)] px-5 sm:px-10 lg:px-16 py-8 sm:py-12">
              <article className="max-w-3xl mx-auto">
                
                {/* Chapter heading */}
                <div className="text-center mb-10 pb-8 border-b border-[#292d37]">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#c8a96e] mb-4">
                    Chapter 1
                  </p>

                  <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf7f0] tracking-tight">
                    THE INHERITANCE OF FIRE
                  </h4>

                  <p className="font-serif italic text-lg sm:text-xl text-[#c8a96e] mt-3">
                    What It Means to Be a Congress Worker
                  </p>
                </div>

                {/* Book text */}
                <div className="font-serif text-[17px] sm:text-[18px] leading-[1.9] text-[#dcd6ca]">
                  {OPENING_SAMPLE
                    .split('\n\n')
                    .map((paragraph, index) => {
                      const trimmed = paragraph.trim();

                      if (!trimmed) return null;

                      if (
                        trimmed === 'CHAPTER 1' ||
                        trimmed === 'THE INHERITANCE OF FIRE' ||
                        trimmed === 'What It Means to Be a Congress Worker'
                      ) {
                        return null;
                      }

                      if (
                        trimmed === '• • •'
                      ) {
                        return (
                          <div
                            key={index}
                            className="text-center text-[#c8a96e] tracking-[0.5em] my-8"
                          >
                            • • •
                          </div>
                        );
                      }

                      if (
                        trimmed.startsWith('“') &&
                        trimmed.endsWith('”')
                      ) {
                        return (
                          <blockquote
                            key={index}
                            className="my-8 pl-6 sm:pl-8 border-l-2 border-[#c8a96e] font-serif italic text-lg sm:text-xl text-[#f4efe5]"
                          >
                            {trimmed}
                          </blockquote>
                        );
                      }

                      if (
                        trimmed ===
                        'Alfred Lord Tennyson, Charge of the Light Brigade'
                      ) {
                        return (
                          <p
                            key={index}
                            className="text-center text-sm sm:text-base text-[#9f988b] italic mt-[-1rem] mb-8"
                          >
                            {trimmed}
                          </p>
                        );
                      }

                      if (
                        trimmed.startsWith('Come, come today to the marketplace in chains,')
                      ) {
                        return (
                          <div
                            key={index}
                            className="my-8 py-6 px-5 sm:px-8 rounded-xl bg-[#14171d] border border-[#292e38] text-[#e7e0d4] whitespace-pre-line italic"
                          >
                            {trimmed}
                          </div>
                        );
                      }

                      return (
                        <p key={index} className="mb-7">
                          {trimmed}
                        </p>
                      );
                    })}
                </div>

                {/* End of sample */}
                <div className="mt-12 pt-8 border-t border-[#292d37] text-center">
                  <p className="font-serif italic text-lg text-[#c8a96e]">
                    Enjoyed reading this sample?
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSampleOpen(false);
                      onOpenBuyModal();
                    }}
                    className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#c8a96e] text-[#0a0b0d] font-semibold text-sm uppercase tracking-wider hover:bg-[#e0c48b] transition-colors"
                  >
                    Purchase the Full Book
                  </button>
                </div>

              </article>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};