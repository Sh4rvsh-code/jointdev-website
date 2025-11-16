'use client';

import { useUIStore } from '@/stores/useUIStore';
import { PageTransition } from '@/components/PageTransition';
import { WavyBackground } from '@/components/ui/wavy-background';
import { RefinedCardSimple } from '@/components/ui/refined-card';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'proj-001',
    title: 'RAG Bot',
    tech: 'Python, LangChain, RAG',
    description: 'A production-ready Retrieval-Augmented Generation (RAG) system that allows users to upload documents (PDF, DOCX, TXT), ask questions, and receive accurate answers with source citations and highlighted text spans.',
    color: 'bg-purple-800',
  },
  {
    id: 'proj-002',
    title: 'Autonomous Research Assistant',
    tech: 'AI, Knowledge Graphs, LLM',
    description: 'An intelligent AI-powered system for research document analysis, combining semantic search, knowledge graphs, and large language models to help researchers explore and understand academic papers.',
    color: 'bg-blue-900',
  },
  {
    id: 'proj-003',
    title: 'EvalOps',
    tech: 'Full-Stack, AI Evaluation',
    description: 'Full-stack application for evaluating AI model outputs, comparing models, and monitoring performance drift over time.',
    color: 'bg-indigo-800',
  },
  {
    id: 'proj-004',
    title: 'Image Recognition Chatbot',
    tech: 'Computer Vision, AI',
    description: 'An intelligent chatbot with advanced image recognition capabilities for visual understanding and interaction.',
    color: 'bg-cyan-800',
  },
  {
    id: 'proj-005',
    title: 'Brewfolio',
    tech: 'Next.js, Express, MongoDB',
    description: 'A full-stack alcohol discovery and review app. Users explore spirits, like and review bottles, and view personal analytics. Mono-repo with Express + MongoDB backend and Next.js frontend with NextAuth.',
    color: 'bg-amber-800',
  },
  {
    id: 'proj-006',
    title: 'SpiceHaven',
    tech: 'Next.js 14, Tailwind CSS',
    description: 'A modern, responsive restaurant landing page built with Next.js 14 and Tailwind CSS. Features a beautiful hero section with parallax scrolling, interactive menu with filtering, booking modal, and Google Maps integration.',
    color: 'bg-orange-800',
  },
  {
    id: 'proj-007',
    title: 'Stipple Effect App',
    tech: 'Image Processing, Web',
    description: 'An innovative image processing application featuring stipple effect generation for artistic image transformations.',
    color: 'bg-pink-800',
  },
  {
    id: 'proj-008',
    title: 'Interactive Video Analyser',
    tech: 'Computer Vision, Python',
    description: 'Advanced computer vision system for real-time video analysis with interactive controls and intelligent frame processing.',
    color: 'bg-teal-800',
  },
  {
    id: 'proj-009',
    title: 'Swastik Gupta Portfolio',
    tech: 'Next.js, Three.js, Framer',
    description: 'A stunning personal portfolio website featuring immersive 3D elements, smooth animations, and modern design principles to showcase creative work and professional achievements.',
    color: 'bg-violet-800',
  },
];

export function ProjectsView() {
  const { activePage, selectProject } = useUIStore();
  const isActive = activePage === 'projects';
  
  // Define grid span classes for masonry/skewed layout
  const gridSpans = [
    'md:col-span-2 md:row-span-2', // Large - spans 2x2
    'md:col-span-1 md:row-span-1', // Small
    'md:col-span-1 md:row-span-2', // Tall
    'md:col-span-2 md:row-span-1', // Wide
    'md:col-span-1 md:row-span-1', // Small
    'md:col-span-1 md:row-span-2', // Tall
    'md:col-span-2 md:row-span-1', // Wide
    'md:col-span-1 md:row-span-1', // Small
    'md:col-span-1 md:row-span-1', // Small
  ];
  
  return (
    <PageTransition isActive={isActive} transitionType="slide-left">
      <WavyBackground 
        className="w-full"
        containerClassName="h-full"
        colors={["#a78bfa", "#c4b5fd", "#818cf8", "#6366f1", "#8b5cf6"]}
        waveWidth={50}
        backgroundFill="var(--bg-primary)"
        blur={10}
        speed="fast"
        waveOpacity={0.5}
      >
        <div className="h-full flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-6xl">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                Our Projects
              </h2>
              <p className="text-text-secondary text-sm md:text-base">
                A showcase of our recent work and achievements
              </p>
            </div>
            
            {/* Skewed Grid Layout - Masonry Style */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[140px] gap-3">
              {/* Card 1 - E-Commerce - Large 2x2 */}
              <RefinedCardSimple 
                containerClassName={`${projects[0].color} col-span-1 md:col-span-2 md:row-span-2`}
                onClick={() => selectProject(projects[0].id)}
              >
                <div className="h-full flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white mb-2">
                      {projects[0].title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-200/90 line-clamp-3">
                      {projects[0].description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                    <span className="text-xs text-neutral-300/80 font-medium">{projects[0].tech}</span>
                    <ExternalLink className="w-4 h-4 text-neutral-300/60" />
                  </div>
                </div>
              </RefinedCardSimple>

              {/* Card 2 - Dashboard - Small 1x1 */}
              <RefinedCardSimple 
                containerClassName={`${projects[1].color} col-span-1 md:col-span-1 md:row-span-1`}
                onClick={() => selectProject(projects[1].id)}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold tracking-tight text-white mb-1">
                      {projects[1].title}
                    </h3>
                    <p className="text-xs text-neutral-200/90 line-clamp-2">
                      {projects[1].description}
                    </p>
                  </div>
                  <span className="text-[10px] text-neutral-300/80 font-medium mt-2">{projects[1].tech}</span>
                </div>
              </RefinedCardSimple>

              {/* Card 3 - Portfolio - Tall 1x2 */}
              <RefinedCardSimple 
                containerClassName={`${projects[2].color} col-span-1 md:col-span-1 md:row-span-2`}
                onClick={() => selectProject(projects[2].id)}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold tracking-tight text-white mb-2">
                      {projects[2].title}
                    </h3>
                    <p className="text-xs text-neutral-200/90 line-clamp-4">
                      {projects[2].description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                    <span className="text-xs text-neutral-300/80 font-medium">{projects[2].tech}</span>
                    <ExternalLink className="w-4 h-4 text-neutral-300/60" />
                  </div>
                </div>
              </RefinedCardSimple>

              {/* Card 4 - Social Media - Wide 2x1 */}
              <RefinedCardSimple 
                containerClassName={`${projects[3].color} col-span-1 md:col-span-2 md:row-span-1`}
                onClick={() => selectProject(projects[3].id)}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold tracking-tight text-white mb-1">
                      {projects[3].title}
                    </h3>
                    <p className="text-xs text-neutral-200/90 line-clamp-2">
                      {projects[3].description}
                    </p>
                  </div>
                  <span className="text-xs text-neutral-300/80 font-medium mt-2">{projects[3].tech}</span>
                </div>
              </RefinedCardSimple>

              {/* Card 5 - AI Chatbot - Small 1x1 */}
              <RefinedCardSimple 
                containerClassName={`${projects[4].color} col-span-1 md:col-span-1 md:row-span-1`}
                onClick={() => selectProject(projects[4].id)}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold tracking-tight text-white mb-1">
                      {projects[4].title}
                    </h3>
                    <p className="text-xs text-neutral-200/90 line-clamp-2">
                      {projects[4].description}
                    </p>
                  </div>
                  <span className="text-[10px] text-neutral-300/80 font-medium mt-2">{projects[4].tech}</span>
                </div>
              </RefinedCardSimple>

              {/* Card 6 - Booking - Tall 1x2 */}
              <RefinedCardSimple 
                containerClassName={`${projects[5].color} col-span-1 md:col-span-1 md:row-span-2`}
                onClick={() => selectProject(projects[5].id)}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold tracking-tight text-white mb-2">
                      {projects[5].title}
                    </h3>
                    <p className="text-xs text-neutral-200/90 line-clamp-4">
                      {projects[5].description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                    <span className="text-xs text-neutral-300/80 font-medium">{projects[5].tech}</span>
                    <ExternalLink className="w-4 h-4 text-neutral-300/60" />
                  </div>
                </div>
              </RefinedCardSimple>

              {/* Card 7 - CRM - Wide 2x1 */}
              <RefinedCardSimple 
                containerClassName={`${projects[6].color} col-span-1 md:col-span-2 md:row-span-1`}
                onClick={() => selectProject(projects[6].id)}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold tracking-tight text-white mb-1">
                      {projects[6].title}
                    </h3>
                    <p className="text-xs text-neutral-200/90 line-clamp-2">
                      {projects[6].description}
                    </p>
                  </div>
                  <span className="text-xs text-neutral-300/80 font-medium mt-2">{projects[6].tech}</span>
                </div>
              </RefinedCardSimple>

              {/* Card 8 - Fitness - Small 1x1 */}
              <RefinedCardSimple 
                containerClassName={`${projects[7].color} col-span-1 md:col-span-1 md:row-span-1`}
                onClick={() => selectProject(projects[7].id)}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold tracking-tight text-white mb-1">
                      {projects[7].title}
                    </h3>
                    <p className="text-xs text-neutral-200/90 line-clamp-2">
                      {projects[7].description}
                    </p>
                  </div>
                  <span className="text-[10px] text-neutral-300/80 font-medium mt-2">{projects[7].tech}</span>
                </div>
              </RefinedCardSimple>

              {/* Card 9 - Swastik Gupta Portfolio - Small 1x1 */}
              <RefinedCardSimple 
                containerClassName={`${projects[8].color} col-span-1 md:col-span-1 md:row-span-1`}
                onClick={() => selectProject(projects[8].id)}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold tracking-tight text-white mb-1">
                      {projects[8].title}
                    </h3>
                    <p className="text-xs text-neutral-200/90 line-clamp-2">
                      {projects[8].description}
                    </p>
                  </div>
                  <span className="text-[10px] text-neutral-300/80 font-medium mt-2">{projects[8].tech}</span>
                </div>
              </RefinedCardSimple>
            </div>
          </div>
        </div>
      </WavyBackground>
    </PageTransition>
  );
}
