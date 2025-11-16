'use client';

import { useUIStore } from '@/stores/useUIStore';
import { PageTransition } from '@/components/PageTransition';

const projectData: Record<string, any> = {
  'proj-001': {
    title: 'E-COMMERCE_PLATFORM',
    description: 'Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard. Built for a retail startup looking to scale quickly.',
    tech: ['NEXT.JS', 'STRIPE', 'SUPABASE', 'TAILWIND'],
    year: 2025,
    duration: '4_WEEKS',
    client: 'RETAIL_STARTUP',
  },
  'proj-002': {
    title: 'AI_CHATBOT',
    description: 'Intelligent chatbot with natural language processing capabilities. Integrated with OpenAI and LangChain for advanced conversational AI.',
    tech: ['REACT', 'OPENAI', 'LANGCHAIN', 'TYPESCRIPT'],
    year: 2025,
    duration: '3_WEEKS',
    client: 'TECH_COMPANY',
  },
  'proj-003': {
    title: 'MOBILE_APP',
    description: 'Cross-platform mobile application built with React Native and Expo. Features real-time sync and offline capabilities.',
    tech: ['REACT_NATIVE', 'EXPO', 'FIREBASE'],
    year: 2024,
    duration: '5_WEEKS',
    client: 'FITNESS_BRAND',
  },
  'proj-004': {
    title: 'DASHBOARD_TOOL',
    description: 'Real-time analytics and data visualization dashboard with D3.js. Connects to PostgreSQL for complex queries.',
    tech: ['NEXT.JS', 'D3', 'POSTGRESQL', 'TAILWIND'],
    year: 2024,
    duration: '4_WEEKS',
    client: 'FINTECH_STARTUP',
  },
};

export function ProjectDetailView() {
  const { activePage, selectedProject } = useUIStore();
  const isActive = activePage === 'project-detail';
  
  const project = selectedProject ? projectData[selectedProject] : null;
  
  if (!project) return null;
  
  return (
    <PageTransition isActive={isActive} transitionType="glitch">
      <div className="h-full overflow-y-auto p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-technical text-[10px] text-text-tertiary mb-2">
                  [PROJECT_DETAIL]
                </div>
                <h2 className="font-display text-4xl font-bold text-text-primary">
                  {project.title}
                </h2>
              </div>
              <div className="text-right">
                <div className="font-technical text-[10px] text-text-tertiary">
                  [Y_{project.year}]
                </div>
              </div>
            </div>
            <div className="h-px bg-grid-color-strong" />
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Image */}
            <div className="space-y-4">
              <div className="w-full aspect-video bg-gradient-to-br from-accent-primary/20 to-bg-secondary border border-grid-color-strong flex items-center justify-center">
                <span className="font-pixel text-accent-primary text-xs">
                  PROJECT_IMAGE
                </span>
              </div>
              
              {/* Tech Stack */}
              <div>
                <div className="font-technical text-[10px] text-text-tertiary mb-2">
                  [TECH_STACK]
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <span 
                      key={t}
                      className="px-2 py-1 border border-grid-color font-pixel text-[8px] text-accent-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right - Details */}
            <div className="space-y-6">
              <div>
                <div className="font-technical text-[10px] text-accent-primary mb-2">
                  [DESCRIPTION]
                </div>
                <p className="font-body text-base text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-grid-color-strong p-4">
                  <div className="font-technical text-[10px] text-text-tertiary mb-1">
                    DURATION
                  </div>
                  <div className="font-display text-2xl font-bold text-text-primary">
                    {project.duration}
                  </div>
                </div>
                
                <div className="border border-grid-color-strong p-4">
                  <div className="font-technical text-[10px] text-text-tertiary mb-1">
                    CLIENT
                  </div>
                  <div className="font-display text-xl font-bold text-text-primary">
                    {project.client}
                  </div>
                </div>
              </div>
              
              {/* Features List */}
              <div>
                <div className="font-technical text-[10px] text-accent-primary mb-3">
                  [KEY_FEATURES]
                </div>
                <ul className="space-y-2">
                  {[
                    'RESPONSIVE_DESIGN',
                    'REAL_TIME_UPDATES',
                    'SECURE_AUTHENTICATION',
                    'OPTIMIZED_PERFORMANCE',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-primary" />
                      <span className="font-technical text-sm text-text-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
