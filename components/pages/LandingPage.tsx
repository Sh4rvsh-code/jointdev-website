'use client';

import { useUIStore } from '@/stores/useUIStore';
import { PageTransition } from '@/components/PageTransition';
import { WavyBackground } from '@/components/ui/wavy-background';
import { RefinedCardSimple } from '@/components/ui/refined-card';
import { TextRoll } from '@/components/ui/text-roll';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { Typewriter } from '@/components/ui/typewriter';
import { motion } from 'motion/react';
import { ExternalLink, ChevronRight } from 'lucide-react';

const allProjects = [
  {
    title: 'RAG Bot',
    tech: 'Python, LangChain, RAG',
    description: 'A production-ready Retrieval-Augmented Generation (RAG) system that allows users to upload documents (PDF, DOCX, TXT), ask questions, and receive accurate answers with source citations and highlighted text spans.',
    color: 'bg-purple-800',
  },
  {
    title: 'Autonomous Research Assistant',
    tech: 'AI, Knowledge Graphs, LLM',
    description: 'An intelligent AI-powered system for research document analysis, combining semantic search, knowledge graphs, and large language models to help researchers explore and understand academic papers.',
    color: 'bg-blue-900',
  },
  {
    title: 'EvalOps',
    tech: 'Full-Stack, AI Evaluation',
    description: 'Full-stack application for evaluating AI model outputs, comparing models, and monitoring performance drift over time.',
    color: 'bg-indigo-800',
  },
  {
    title: 'Image Recognition Chatbot',
    tech: 'Computer Vision, AI',
    description: 'An intelligent chatbot with advanced image recognition capabilities for visual understanding and interaction.',
    color: 'bg-cyan-800',
  },
  {
    title: 'Brewfolio',
    tech: 'Next.js, Express, MongoDB',
    description: 'A full-stack alcohol discovery and review app. Users explore spirits, like and review bottles, and view personal analytics. Mono-repo with Express + MongoDB backend and Next.js frontend with NextAuth.',
    color: 'bg-amber-800',
  },
  {
    title: 'SpiceHaven',
    tech: 'Next.js 14, Tailwind CSS',
    description: 'A modern, responsive restaurant landing page built with Next.js 14 and Tailwind CSS. Features a beautiful hero section with parallax scrolling, interactive menu with filtering, booking modal, and Google Maps integration.',
    color: 'bg-orange-800',
  },
  {
    title: 'Stipple Effect App',
    tech: 'Image Processing, Web',
    description: 'An innovative image processing application featuring stipple effect generation for artistic image transformations.',
    color: 'bg-pink-800',
  },
  {
    title: 'Interactive Video Analyser',
    tech: 'Computer Vision, Python',
    description: 'Advanced computer vision system for real-time video analysis with interactive controls and intelligent frame processing.',
    color: 'bg-teal-800',
  },
  {
    title: 'Swastik Gupta Portfolio',
    tech: 'Next.js, Three.js, Framer',
    description: 'A stunning personal portfolio website featuring immersive 3D elements, smooth animations, and modern design principles to showcase creative work and professional achievements.',
    color: 'bg-violet-800',
  },
];

export function LandingPage() {
  const { activePage, setActivePage } = useUIStore();
  const isActive = activePage === 'landing';
  
  return (
    <PageTransition isActive={isActive}>
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
        <div className="h-full flex items-center justify-center p-8 md:p-16">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-primary font-medium text-sm w-fit">
              <span className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
              Available for Freelance
            </div>
            
            {/* Main Heading */}
            <div>
              <h1 className="font-display font-bold text-text-primary leading-tight">
                <div className="text-6xl md:text-7xl mb-2">
                  <TextRoll
                    duration={0.4}
                    getEnterDelay={(i) => i * 0.04}
                    getExitDelay={(i) => i * 0.04 + 0.4}
                    transition={{ ease: [0.4, 0.0, 0.2, 1] }}
                    loop={true}
                  >
                    We Roll Ideas
                  </TextRoll>
                </div>
                <div className="text-6xl md:text-7xl mb-6">
                  <TextRoll
                    duration={0.4}
                    getEnterDelay={(i) => (i + 14) * 0.04}
                    getExitDelay={(i) => (i + 14) * 0.04 + 0.4}
                    transition={{ ease: [0.4, 0.0, 0.2, 1] }}
                    loop={true}
                  >
                    Together.
                  </TextRoll>
                </div>
              </h1>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="font-display text-2xl md:text-3xl font-bold text-white leading-relaxed mb-4"
              >
                Let's{" "}
                <Highlight className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 dark:from-purple-400 dark:via-fuchsia-500 dark:to-blue-500">
                  <Typewriter
                    text="LIGHT UP"
                    delay={150}
                    cursor={false}
                    className="text-white font-mono font-semibold tracking-wide"
                  />
                </Highlight>{" "}
                Your Vision.
              </motion.h2>
              <h3 className="text-lg md:text-xl leading-relaxed mb-4 font-normal">
                <EncryptedText
                  text="We shape your ideas into smooth, modern, functional builds — crafted with clarity and collaboration."
                  encryptedClassName="text-neutral-500"
                  revealedClassName="text-text-secondary"
                  revealDelayMs={30}
                  flipDelayMs={40}
                />
              </h3>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* View Projects Button - Purple with White Hover */}
              <motion.button
                onClick={() => setActivePage('projects')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-purple-600 text-white font-semibold rounded-2xl overflow-hidden shadow-lg shadow-purple-500/30 transition-all duration-300"
              >
                {/* White overlay on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                
                <span className="relative flex items-center justify-center gap-2 group-hover:text-purple-600 transition-colors duration-300">
                  View Projects
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </motion.button>
              
              {/* About Us Button - No Outline, Clean Glass */}
              <motion.button
                onClick={() => setActivePage('about')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-white/5 backdrop-blur-xl text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-lg"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
                
                <span className="relative flex items-center justify-center gap-2">
                  About Us
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </div>
          </div>
          
          {/* RIGHT SIDE - Wobble Cards */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-text-primary">
                Recent Projects
              </h2>
              <button
                onClick={() => setActivePage('projects')}
                className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-accent-primary border border-accent-primary/20 rounded-lg hover:bg-accent-primary/5 hover:border-accent-primary/40 transition-all duration-300"
              >
                View All
                <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
            
            {/* Show 5 Projects - Compact Layout */}
            <div className="grid grid-cols-2 gap-3">
                {/* First Project - Spans 2 columns */}
                <RefinedCardSimple
                  containerClassName={`${allProjects[0].color} col-span-2 h-[160px]`}
                  onClick={() => setActivePage('projects')}
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-white">
                        {allProjects[0].title}
                      </h3>
                      <p className="mt-1.5 text-xs text-neutral-200/90 line-clamp-2">
                        {allProjects[0].description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-300/80 font-medium">{allProjects[0].tech}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-300/60" />
                    </div>
                  </div>
                </RefinedCardSimple>

                {/* Projects 2-5 - 2x2 Grid */}
                {allProjects.slice(1, 5).map((project, index) => (
                  <RefinedCardSimple
                    key={index}
                    containerClassName={`${project.color} h-[140px]`}
                    onClick={() => setActivePage('projects')}
                  >
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-semibold tracking-tight text-white line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-neutral-200/90 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <span className="text-[10px] text-neutral-300/80 font-medium">{project.tech}</span>
                    </div>
                  </RefinedCardSimple>
                ))}
            </div>
          </div>
        </div>
      </div>
      </WavyBackground>
    </PageTransition>
  );
}
