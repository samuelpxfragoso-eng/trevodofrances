export interface Supporter {
  id: string;
  name: string;
  loteamento: string;
  plan: 'Colaborador' | 'Proteção Total' | 'Associado';
  date: string;
  avatarSeed: number; // For generated avatars
}

export interface SecurityEvent {
  id: string;
  timestamp: string;
  location: string;
  type: 'camera' | 'portal' | 'system' | 'radar';
  details: string;
  plate?: string;
  status: 'safe' | 'warning' | 'alert';
}

export interface InstagramPost {
  id: string;
  title: string;
  imageUrl: string;
  category: 'zumba_ritbox' | 'assembleia' | 'mutirao' | 'conquistas';
  likes: number;
  comments: number;
  date: string;
  caption: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'geral' | 'seguranca' | 'contribuicao';
}
