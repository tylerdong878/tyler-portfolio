import { Project, Skill, Experience } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'SnakeRL',
    description: 'Deep reinforcement learning system for Snake game agent using proximal policy optimization (PPO) with support for 100+ vectorized parallel environments and real-time visualization.',
    tech: ['Python', 'PyTorch', 'NumPy', 'Gymnasium', 'Stable-Baselines3', 'Poetry', 'Pygame', 'Matplotlib', 'TensorBoard'],
    githubUrl: 'https://github.com/tylerdong878/SnakeRL',
    devpostUrl: 'https://devpost.com/dong-ty',
    image: '/projects/snakerl.gif',
    featured: true
  },
  {
    id: '2',
    title: 'NBA Player Consistency Analyzer',
    description: 'Web application analyzing player consistency for 550+ active players using live nba_api data with dynamic threshold settings for games, points, rebounds, and assists.',
    tech: ['Python', 'HTML', 'JavaScript', 'CSS', 'Flask', 'pandas', 'nba_api'],
    githubUrl: 'https://github.com/tylerdong878/NBA-Analyzer',
    devpostUrl: 'https://devpost.com/dong-ty',
    image: '/projects/nba-player-consistency-analyzer.png',
    featured: true
  },
  {
    id: '3',
    title: 'Marine Radar Scanner',
    description: 'Radar scanner with live object detection using Processing and Arduino.',
    tech: ['Processing', 'Arduino', 'C++'],
    githubUrl: 'https://github.com/tylerdong878/Marine-Radar-Scanner',
    image: '/projects/marine-radar-scanner.gif',
    featured: false
  },
  {
    id: '4',
    title: 'ManImTired',
    description: 'LLM-powered application that generates educational Manim script videos from natural language prompts.',
    tech: ['Python', 'Manim', 'DearPyGui', 'Langchain', 'OpenAI'],
    githubUrl: 'https://github.com/Tetraslam/manimtired',
    devpostUrl: 'https://devpost.com/dong-ty',
    image: '/projects/manimtired.gif',
    featured: false
  },
  {
    id: '5',
    title: 'SpendShield',
    description: 'Gamified social finance application that transforms financial management into an engaging social experience with real-time data and user interactions.',
    tech: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Supabase'],
    githubUrl: 'https://github.com/Bruvato/spend-shield',
    devpostUrl: 'https://devpost.com/dong-ty',
    image: '/projects/spendshield.png',
    featured: false
  },
  {
    id: '6',
    title: 'AnimaGo',
    description: 'Augmented reality mobile app that gamifies wildlife discovery and conservation through real-time species identification with personalized "Biodex" and citizen science contributions.',
    tech: ['Python', 'Flet', 'FastAPI', 'PyTorch', 'Moondream'],
    githubUrl: 'https://github.com/Tetraslam/AnimaGo',
    devpostUrl: 'https://devpost.com/dong-ty',
    image: '/projects/animago.png',
    featured: false
  },
  {
    id: '7',
    title: 'Road Toad',
    description: 'AI-powered road trip planner using Gemini API for intelligent route optimization and travel recommendations.',
    tech: ['TypeScript', 'React', 'Next.js', 'Gemini API'],
    githubUrl: 'https://github.com/Bruvato/road-toad',
    devpostUrl: 'https://devpost.com/dong-ty',
    image: '/projects/road-toad.png',
    featured: false
  },
  {
    id: '8',
    title: 'Noblo Asteroids',
    description: '3D style space invaders arcade game with modern graphics and gameplay mechanics.',
    tech: ['Unity', 'C#'],
    githubUrl: 'https://github.com/Bruvato/noblo-asteroids',
    devpostUrl: 'https://devpost.com/dong-ty',
    image: '/projects/noblo-asteroids.gif',
    featured: false
  },
  {
    id: '9',
    title: 'SVS Lunar Client',
    description: 'Deep reinforcement learning simulation to train AI to operate space vehicles with realistic physics and navigation.',
    tech: ['Python', 'PyTorch', 'Unity', 'C#'],
    githubUrl: 'https://github.com/Bruvato/svs-lunar-client',
    devpostUrl: 'https://devpost.com/dong-ty',
    image: '/projects/svs-lunar-client.gif',
    featured: false
  },
  {
    id: '10',
    title: 'Spotify Playlist Updater',
    description: 'Automation tool for bulk adding songs from specified artists with real-time tracking for new releases and intelligent filtering for duplicates and alternate versions.',
    tech: ['Python', 'Spotify Web API', 'Spotipy'],
    githubUrl: 'https://github.com/tylerdong878/Spotify-Playlist-Updater',
    devpostUrl: 'https://devpost.com/dong-ty',
    image: '/projects/spotify.jpg',
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
  email: 'tylerdong878@gmail.com'
};
