export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: 'Mobile' | 'Web' | 'Embedded' | 'Full-Stack' | 'Frontend' | 'AI & Web3';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  screenshots?: string[];
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    icon: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}
