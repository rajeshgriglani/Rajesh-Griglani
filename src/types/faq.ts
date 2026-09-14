export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Book' | 'Political Experience' | 'BODHI' | 'Media';
  source: 'website' | 'book' | 'writings';
}
