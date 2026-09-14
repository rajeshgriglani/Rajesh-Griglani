import { BookRetailerItem, BookLinksConfig } from '../../types/retailer';

export const BOOK_RETAILERS: BookRetailerItem[] = [
  {
    id: 'amazon',
    name: 'Amazon',
    badge: 'Hardcover / Prime',
    url: 'https://amzn.in/d/0cdyCZeZ',
    enabled: true,
    description: 'Order official hardcover with express nationwide delivery.',
    iconName: 'ShoppingCart',
    priority: 1,
  },
  {
    id: 'notionPress',
    name: 'Notion Press',
    badge: 'Publisher Edition',
    url: 'https://notionpress.com/in/read/roots-of-resistance-1410191955-hardcover',
    enabled: true,
    description: 'Direct author & publisher store with signed collector edition updates.',
    iconName: 'BookOpen',
    priority: 2,
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    badge: 'Standard Edition',
    url: 'https://dl.flipkart.com/s/DfpXMAuuuN',
    enabled: true,
    description: 'Fast pan-India bookstore dispatch & verified customer reviews.',
    iconName: 'ExternalLink',
    priority: 3,
  },
  {
    id: 'hugendubel',
    name: 'Hugendubel',
    badge: 'Europe / Germany',
    url: 'https://www.hugendubel.de/de/buch_gebunden/rajesh_bhojraj_griglani-roots_of_resistance-54542309-produkt-details.html',
    enabled: true,
    description: 'Premier German bookstore chain hardcover edition & European delivery.',
    iconName: 'Globe',
    priority: 4,
  },
  {
    id: 'crossword',
    name: 'Crossword Bookstores',
    badge: 'Select Stores',
    url: 'https://www.crossword.in',
    enabled: true,
    description: 'Physical bookstore locator and premier cultural distribution.',
    iconName: 'MapPin',
    priority: 5,
  },
  {
    id: 'bahrisons',
    name: 'Bahrisons Booksellers',
    badge: 'Independent',
    url: 'https://booksatbahri.com',
    enabled: false,
    description: 'Iconic independent booksellers in New Delhi & Kolkata.',
    iconName: 'Building',
    priority: 6,
  },
];

export const getEnabledRetailers = (): BookRetailerItem[] => {
  return BOOK_RETAILERS.filter((r) => r.enabled).sort((a, b) => (a.priority || 99) - (b.priority || 99));
};

export const getRetailerById = (id: string): BookRetailerItem | undefined => {
  return BOOK_RETAILERS.find((r) => r.id.toLowerCase() === id.toLowerCase());
};

export const getBookLinksConfig = (): BookLinksConfig => {
  const amazon = getRetailerById('amazon') || {
    id: 'amazon',
    name: 'Amazon',
    url: 'https://amzn.in/d/0cdyCZeZ',
    enabled: true,
    description: 'Amazon Store',
  };
  const notionPress = getRetailerById('notionPress') || {
    id: 'notionPress',
    name: 'Notion Press',
    url: 'https://notionpress.com/in/read/roots-of-resistance-1410191955-hardcover',
    enabled: true,
    description: 'Notion Press Store',
  };
  const flipkart = getRetailerById('flipkart') || {
    id: 'flipkart',
    name: 'Flipkart',
    url: 'https://dl.flipkart.com/s/DfpXMAuuuN',
    enabled: true,
    description: 'Flipkart Store',
  };
  const hugendubel = getRetailerById('hugendubel') || {
    id: 'hugendubel',
    name: 'Hugendubel',
    url: 'https://www.hugendubel.de/de/buch_gebunden/rajesh_bhojraj_griglani-roots_of_resistance-54542309-produkt-details.html',
    enabled: true,
    description: 'Hugendubel Bookstore (Germany / Europe)',
  };
  const otherRetailers = BOOK_RETAILERS.filter(
    (r) => !['amazon', 'notionpress', 'flipkart'].includes(r.id.toLowerCase())
  );

  return {
    amazon,
    notionPress,
    flipkart,
    hugendubel,
    otherRetailers,
  };
};
