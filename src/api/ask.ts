import { request } from './client';
import { AskQuestionRequest, AskQuestionResponse, KnowledgeSourceCitation } from '../types/ask';
import { FAQ_DATA } from '../data/mock/faq';
import { BOOK_DATA } from '../data/mock/book';
import { AUTHOR_DATA } from '../data/mock/author';
import { ApiResponse } from '../types/api';

export const askQuestion = async (
  payload: AskQuestionRequest
): Promise<ApiResponse<AskQuestionResponse>> => {
  return request<AskQuestionResponse>(
    '/ask',
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
    () => {
      const q = payload.question.trim().toLowerCase();

      // 1. Check exact match in verified FAQs
      const matchedFaq = FAQ_DATA.find(
        (faq) =>
          faq.question.toLowerCase().includes(q) ||
          q.includes(faq.question.toLowerCase().replace(/[?]/g, ''))
      );

      if (matchedFaq) {
        const isBuying =
          matchedFaq.category === 'Book' ||
          q.includes('buy') ||
          q.includes('order') ||
          q.includes('purchase');
        return {
          answer: matchedFaq.answer,
          sourceType: matchedFaq.source,
          showRetailerButtons: isBuying,
          sources: [
            {
              sourceType: matchedFaq.source,
              title:
                matchedFaq.category === 'Book'
                  ? `${BOOK_DATA.title}: Chapter & Author Notes`
                  : 'Official Biography & Verified Archives',
            },
          ],
          timestamp: new Date().toISOString(),
        };
      }

      // 2. Keyword matching against author, book, BODHI, politics
      if (q.includes('inspire') || (q.includes('roots') && q.includes('why'))) {
        return {
          answer:
            'Roots of Resistance was directly sparked on 28 February 2002 when Rajesh was stopped by a mob on a burning road in Naroda Patiya. Producing his Driving License verified his Hindu name and saved his life—a terrifying encounter made more lethal because he is circumcised for medical reasons. This harrowing moment crystallized the core message: "The secular republic is not an abstraction. It is the thing between you and the mob."',
          sourceType: 'book',
          showRetailerButtons: true,
          sources: [
            {
              sourceType: 'book',
              title: `${BOOK_DATA.title}: Chapter 3 (The Fragile License)`,
            },
          ],
          timestamp: new Date().toISOString(),
        };
      }

      if (q.includes('buy') || q.includes('order') || q.includes('price') || q.includes('purchase') || q.includes('store') || q.includes('retailer')) {
        return {
          answer: `${BOOK_DATA.title} (${BOOK_DATA.subtitle}) is available in hardcover across major national and international book retailers including Amazon, Notion Press, Flipkart, and Hugendubel (Europe). You can select your preferred retailer below to place your order.`,
          sourceType: 'store',
          showRetailerButtons: true,
          sources: [
            {
              sourceType: 'store',
              title: 'Official Bookstore Distributors',
            },
          ],
          timestamp: new Date().toISOString(),
        };
      }

      if (q.includes('bodhi') || q.includes('instinct') || q.includes('intellect') || q.includes('intuition')) {
        return {
          answer:
            'BODHI INSTITUTE (Bureau of Developing Human Instincts, Intellect & Intuitions) is an institutional leadership initiative founded by Rajesh Bhojraj Griglani. It trains political leaders, youth, and cadres across three foundational pillars: INSTINCT (grassroots behavioural psychology), INTELLECT (booth-level data & war room structuring), and INTUITION (strategic narrative foresight).',
          sourceType: 'website',
          showRetailerButtons: false,
          sources: [
            {
              sourceType: 'website',
              title: 'BODHI Institute Overview',
            },
          ],
          timestamp: new Date().toISOString(),
        };
      }

      if (q.includes('women') || q.includes('mahila') || q.includes('sitare')) {
        return {
          answer:
            'In 2018, Rajesh spearheaded the "SITARE" flagship leadership and cadre development programme with the All India Mahila Congress across Gujarat, Maharashtra, Rajasthan, Madhya Pradesh, Chhattisgarh, Uttarakhand, Haryana, and Goa—training self-reliant women booth leaders, orators, and campaign commanders.',
          sourceType: 'website',
          showRetailerButtons: false,
          sources: [
            {
              sourceType: 'website',
              title: 'Women\'s Leadership & Mahila Congress Archives',
            },
          ],
          timestamp: new Date().toISOString(),
        };
      }

      if (q.includes('journey') || q.includes('career') || q.includes('timeline') || q.includes('background')) {
        return {
          answer: `${AUTHOR_DATA.name} was born in 1973 in Porbandar, Gujarat into a 3rd-generation Congress family. Educated at Sainik School Balachadi and MSU Baroda (M.A. Political Science), he began grassroots organizing in 1996 with Shri Vitthalbhai Shah, led national cadre training with JNLI across 15+ states (2007–2017), served on the National Executive Committee for Social Media (2020–2024), formulated the Goa Assembly election blueprint (2021–2022), and founded BODHI in 2024.`,
          sourceType: 'website',
          showRetailerButtons: false,
          sources: [
            {
              sourceType: 'website',
              title: 'Chronology of Influence: 1973–Present',
            },
          ],
          timestamp: new Date().toISOString(),
        };
      }

      if (q.includes('media') || q.includes('interview') || q.includes('press') || q.includes('speaking') || q.includes('youtube') || q.includes('decoder') || q.includes('tribune')) {
        return {
          answer:
            'Rajesh Griglani has featured across prominent national broadcast dialogues, political interviews, and press coverage. Key highlights include his exclusive interview on Desi Decoder analyzing Rahul Gandhi and counter-disinformation strategies, video dialogues on Modi-Shah electoral mechanics, national dispatches in The Times of India, ANI News coverage on his appointment to the Congress Social Media National Executive Committee, and The Tribune Online on his role as AICC Coordinator for Goa Assembly elections.',
          sourceType: 'website',
          showRetailerButtons: false,
          sources: [
            {
              sourceType: 'website',
              title: 'Media, Press & Speaking Broadcast Archives',
            },
          ],
          timestamp: new Date().toISOString(),
        };
      }

      // Default contextual synthesis
      return {
        answer: `${AUTHOR_DATA.name} is the author of ${BOOK_DATA.title} (${BOOK_DATA.subtitle}), a 3rd-generation Congressman, political strategist, and founder of BODHI. His work bridges thirty years of grassroots election management, cadre pedagogy across 15+ states, and an unwavering defense of India's constitutional and secular republic.`,
        sourceType: 'website',
        showRetailerButtons: true,
        sources: [
          {
            sourceType: 'website',
            title: 'Official Author Archive & Verified Documentation',
          },
        ],
        timestamp: new Date().toISOString(),
      };
    }
  );
};
