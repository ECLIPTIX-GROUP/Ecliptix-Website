import { ReactNode } from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  fullDescription: string;
  features: string[];
  techSpecs: string[];
}

export interface ProductModule {
  id: string; // Added ID for navigation
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  techTags: string[];
  // New detailed fields
  fullDescription?: string;
  architecture?: string; // Description of how it works technically
  keyFeatures?: string[];
  specs?: { label: string; value: string }[];
}

export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  themeColor: 'green' | 'blue';
  icon: ReactNode;
  modules: ProductModule[];
  impactStats: { value: string; label: string }[];
  targetAudience: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experienceLevel: string;
  salaryRange?: string;
  description: string;
  mission: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  skills: string[]; // New: Key competencies
  tools: string[];  // New: Tech stack / Tools used
}

export interface LogEntry {
  id: string;
  date: string;
  title: string;
  category: 'Tech' | 'Mission' | 'Event' | 'Update' | 'Vision';
  excerpt: string;
  readTime: string;
  image?: string;
  author?: string;
  role?: string;
  location?: string;
  clearanceLevel?: string; 
  content?: string; 
  tags?: string[];
}

export interface Course {
  id: string;
  title: string;
  level: string; // Broadened to string to accept various levels including Junior
  duration: string;
  format: string;
  nextSession: string;
  price: string;
  description: string;
  objectives: string[];
  prerequisites: string[];
  targetAudience: string[];
  curriculum: {
    module: string;
    title: string;
    topics: string[];
  }[];
  certification: string;
  icon?: ReactNode;
  stack?: string[]; // Names of tech in stack
  stackIcons?: ReactNode[]; // Icons for the stack
  mentors?: { name: string; role: string; bio: string; image: string }[];
  careerOpportunities?: string[];
  toolsProvided?: string[];
  faq?: { question: string; answer: string }[];
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  icon: ReactNode;
  color: "orange" | "blue" | "green" | "purple";
  duration: string;
  objectives: string[];
  deliverables: string[];
  methodology: string;
  tools: string[];
}