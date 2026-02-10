
export interface Product {
  id: string;
  number: string;
  name: string;
  description: string;
  features: Feature[];
  image: string;
  isComingSoon?: boolean;
  reverseLayout?: boolean;
  icon?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  text: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
