import { Project, Skill, Experience } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Trading Bot Framework',
    description: 'A comprehensive algorithmic trading framework with real-time market data processing and automated execution strategies.',
    tech: ['Python', 'TensorFlow', 'Pandas', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/yourusername/trading-bot',
    liveUrl: 'https://trading-bot-demo.com',
    featured: true
  },
  {
    id: '2',
    title: 'Portfolio Analytics Dashboard',
    description: 'Interactive dashboard for portfolio risk analysis and performance visualization with real-time data updates.',
    tech: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/portfolio-dashboard',
    featured: true
  },
  {
    id: '3',
    title: 'Machine Learning Pipeline',
    description: 'Scalable ML pipeline for financial data preprocessing, model training, and deployment.',
    tech: ['Python', 'Apache Airflow', 'Kubernetes', 'MLflow', 'AWS'],
    githubUrl: 'https://github.com/yourusername/ml-pipeline',
    featured: false
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 90 },
  { name: 'TypeScript', category: 'frontend', level: 85 },
  { name: 'Next.js', category: 'frontend', level: 80 },
  { name: 'Tailwind CSS', category: 'frontend', level: 85 },
  { name: 'D3.js', category: 'frontend', level: 70 },
  
  // Backend
  { name: 'Python', category: 'backend', level: 95 },
  { name: 'Node.js', category: 'backend', level: 80 },
  { name: 'FastAPI', category: 'backend', level: 85 },
  { name: 'PostgreSQL', category: 'backend', level: 75 },
  { name: 'MongoDB', category: 'backend', level: 70 },
  
  // Quant/Finance
  { name: 'TensorFlow', category: 'quant', level: 80 },
  { name: 'Pandas', category: 'quant', level: 95 },
  { name: 'NumPy', category: 'quant', level: 90 },
  { name: 'QuantLib', category: 'quant', level: 75 },
  { name: 'R', category: 'quant', level: 70 },
  
  // Tools
  { name: 'Docker', category: 'tools', level: 80 },
  { name: 'Kubernetes', category: 'tools', level: 70 },
  { name: 'AWS', category: 'tools', level: 75 },
  { name: 'Git', category: 'tools', level: 90 },
  { name: 'Linux', category: 'tools', level: 85 }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Quantitative Developer',
    company: 'FinTech Startup',
    period: '2023 - Present',
    description: 'Developing algorithmic trading strategies and building high-performance trading infrastructure.',
    technologies: ['Python', 'C++', 'Kubernetes', 'AWS', 'TensorFlow']
  },
  {
    id: '2',
    title: 'Software Engineer',
    company: 'Tech Company',
    period: '2022 - 2023',
    description: 'Built scalable web applications and microservices for financial platforms.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
  }
];

export const socialLinks = {
  github: 'https://github.com/tylerdong878',
  linkedin: 'https://linkedin.com/in/tylerdong',
  twitter: 'https://twitter.com/tylerdong',
  email: 'tyler.dong@example.com'
};
