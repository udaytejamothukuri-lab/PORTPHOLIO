export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problemSolved: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  whatILearned: string[];
  futureImprovements: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    badge?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  status: string;
  graduationYear: string;
  location: string;
  highlights: string[];
}

export interface LearningExperienceItem {
  title: string;
  category: string;
  period: string;
  description: string;
  skills: string[];
  highlights: string[];
}

export interface CertificationItem {
  name: string;
  organization: string;
  date?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skillsGained: string[];
  status: 'Completed' | 'In Progress';
}

export interface AchievementItem {
  title: string;
  organizationOrEvent: string;
  date?: string;
  category: 'Bootcamp' | 'Workshop' | 'Hackathon' | 'Academics';
  description: string;
  highlight?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface PortfolioConfig {
  name: string;
  displayName: string;
  initials: string;
  role: string;
  tagline: string;
  subTagline: string;
  statusBadge: string;
  email: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl: string;
  profileImage: string;
  resumePath: string;
  location: string;
  aboutText: string;
  stats: StatItem[];
  education: EducationItem;
  skillCategories: SkillCategory[];
  projects: Project[];
  learningExperience: LearningExperienceItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
}
