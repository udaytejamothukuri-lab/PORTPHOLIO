import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import type { Project } from './types/portfolio';

// Layout & Utility Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ProjectModal } from './components/ProjectModal';

// Content Sections
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { EducationSection } from './sections/EducationSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { GithubSection } from './sections/GithubSection';
import { ResumeSection } from './sections/ResumeSection';
import { ContactSection } from './sections/ContactSection';

export const App: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sectionIds = [
    'home',
    'about',
    'education',
    'skills',
    'projects',
    'experience',
    'certifications',
    'achievements',
    'github',
    'resume',
    'contact',
  ];

  const activeSection = useScrollSpy(sectionIds, 150);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Scroll Reading Progress Bar */}
      <ScrollProgress />

      {/* Subtle Visual Background Animation */}
      <AnimatedBackground />

      {/* Header Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        currentTheme={theme}
        onThemeChange={setTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full" id="main-content">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <ExperienceSection />
        <CertificationsSection />
        <AchievementsSection />
        <GithubSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Accessible Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
