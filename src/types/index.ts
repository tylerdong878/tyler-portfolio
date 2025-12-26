export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'quant';
  level: number;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}
