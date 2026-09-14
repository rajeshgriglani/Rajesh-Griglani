export type KnowledgeSourceType = 'website' | 'book' | 'writings' | 'store';

export interface KnowledgeSourceCitation {
  id?: string;
  sourceType: KnowledgeSourceType;
  title: string;
  snippet?: string;
  url?: string;
}

export interface AskQuestionRequest {
  question: string;
  sessionId?: string;
}

export interface AskQuestionResponse {
  answer: string;
  sourceType: KnowledgeSourceType;
  showRetailerButtons?: boolean;
  sources: KnowledgeSourceCitation[];
  timestamp: string;
}
