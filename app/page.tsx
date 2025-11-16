'use client';

import { useState, useEffect } from 'react';
import { ScreenLayout } from '@/components/ScreenLayout';
import { LandingPage } from '@/components/pages/LandingPage';
import { ProjectsView } from '@/components/pages/ProjectsView';
import { AboutView } from '@/components/pages/AboutView';
import { ProjectDetailView } from '@/components/pages/ProjectDetailView';
import { ContactModal } from '@/components/pages/ContactModal';
import { IntroAnimation } from '@/components/IntroAnimation';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  
  useEffect(() => {
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  
  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />;
  }
  
  return (
    <ScreenLayout>
      {/* All pages layered */}
      <LandingPage />
      <ProjectsView />
      <AboutView />
      <ProjectDetailView />
      <ContactModal />
    </ScreenLayout>
  );
}
