export type ProjectCategory = 'Tkinter' | 'React' | 'Flet' | 'Flutter' | 'Flask' | 'Django';

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  githubUrl: string;
  liveDemoUrl?: string;
  thumbnail: string;
  screenshots: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string[];
  current?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  linkedin?: string;
  github: string;
  location?: string;
  cvUrl?: string;
}
