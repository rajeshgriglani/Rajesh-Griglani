import { SeoMetadata } from '../../types/seo';
import { AUTHOR_DATA } from './author';
import { BOOK_DATA } from './book';
import { getMediaUrl } from './mediaRegistry';

export const SEO_DATA: SeoMetadata = {
  siteName: `${AUTHOR_DATA.name} | Official Website`,
  title: `${AUTHOR_DATA.name} | Author, Political Strategist & Leadership Mentor`,
  description: `Official website of ${AUTHOR_DATA.name} — author of ${BOOK_DATA.title}, political strategist, leadership mentor, founder of BODHI and grassroots political trainer.`,
  keywords: [
    AUTHOR_DATA.name,
    AUTHOR_DATA.shortName,
    BOOK_DATA.title,
    BOOK_DATA.subtitle,
    'Political memoir',
    'Indian political memoir',
    'Political strategist India',
    'Leadership mentor',
    'BODHI',
    'Political training',
    'Grassroots leadership',
    'All India Mahila Congress',
    'Sainik School Balachadi',
    'MSU Baroda',
  ],
  canonicalUrl: 'https://rajeshgriglani.com/',
  ogImage: getMediaUrl(AUTHOR_DATA.portraitImageId),
  twitterImage: getMediaUrl(AUTHOR_DATA.portraitImageId),
  twitterHandle: '@griglani',
  author: AUTHOR_DATA.name,
  locale: 'en_US',
  type: 'website',
};

export const generateStructuredDataJson = () => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://rajeshgriglani.com/#person',
        name: AUTHOR_DATA.name,
        birthDate: '1973-02-07',
        birthPlace: {
          '@type': 'Place',
          name: AUTHOR_DATA.birthPlace,
        },
        jobTitle: AUTHOR_DATA.designation,
        description: AUTHOR_DATA.heroSupportingText,
        url: 'https://rajeshgriglani.com',
        image: getMediaUrl(AUTHOR_DATA.portraitImageId),
        sameAs: [
          AUTHOR_DATA.socialLinks.twitter,
          AUTHOR_DATA.socialLinks.instagram,
          AUTHOR_DATA.socialLinks.facebook,
          AUTHOR_DATA.socialLinks.linkedin,
          AUTHOR_DATA.socialLinks.youtube,
          AUTHOR_DATA.socialLinks.imdb,
          AUTHOR_DATA.socialLinks.whatsappChannel,
          AUTHOR_DATA.socialLinks.telegram,
        ],
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'Sainik School Balachadi',
          },
          {
            '@type': 'EducationalOrganization',
            name: 'The Maharaja Sayajirao University of Baroda',
          },
        ],
      },
      {
        '@type': 'Book',
        '@id': 'https://rajeshgriglani.com/#book',
        name: BOOK_DATA.fullTitle,
        headline: BOOK_DATA.tagline,
        author: {
          '@id': 'https://rajeshgriglani.com/#person',
        },
        bookFormat: 'https://schema.org/Hardcover',
        genre: BOOK_DATA.genre,
        inLanguage: BOOK_DATA.language,
        description: BOOK_DATA.primaryDescription,
        image: getMediaUrl(BOOK_DATA.coverImageId),
      },
    ],
  };
};
