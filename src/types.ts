export interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  video?: string;
}

export interface Project {
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  metrics: {
    timeReduction: string;
    costSavings: string;
    efficiency: string;
  };
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface FAQ {
  question: string;
  answer: string;
}