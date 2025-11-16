'use client';

import { useUIStore } from '@/stores/useUIStore';
import { PageTransition } from '@/components/PageTransition';
import { WavyBackground } from '@/components/ui/wavy-background';
import { motion } from 'motion/react';
import { Users, Target, Zap, Award, Code2, Sparkles, Rocket, Heart } from 'lucide-react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb,
  SiSwift, SiOpenai, SiTensorflow 
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const services = [
  {
    title: 'Full-Stack Development',
    description: 'Modern web applications built with cutting-edge technologies',
    icon: Code2,
  },
  {
    title: 'Mobile Excellence',
    description: 'Cross-platform apps that deliver seamless user experiences',
    icon: Sparkles,
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful interfaces with intuitive interactions',
    icon: Heart,
  },
  {
    title: 'AI Integration',
    description: 'Smart solutions powered by artificial intelligence',
    icon: Rocket,
  },
];

const stats = [
  { label: 'Projects', value: '50+', icon: Award },
  { label: 'Clients', value: '40+', icon: Users },
  { label: 'Years', value: '5+', icon: Zap },
  { label: 'Success', value: '98%', icon: Target },
];

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
  { name: 'Swift', icon: SiSwift, color: '#F05138' },
  { name: 'OpenAI', icon: SiOpenai, color: '#10A37F' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
];

export function AboutView() {
  const { activePage } = useUIStore();
  const isActive = activePage === 'about';
  
  return (
    <PageTransition isActive={isActive} transitionType="fade">
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
        <div className="h-full overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="h-full w-full max-w-5xl mx-auto flex flex-col gap-2.5 py-3">
            
            {/* Hero Section - Minimal Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex-shrink-0"
            >
              <div className="relative rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-6 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
                
                {/* Noise texture */}
                <div 
                  className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                  style={{
                    backgroundImage: "url(/noise.webp)",
                    backgroundSize: "200px",
                  }}
                />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-2.5"
                  >
                    <Sparkles className="w-3 h-3 text-purple-300" />
                    <span className="text-xs text-purple-200 font-medium">About Joint Dev</span>
                  </motion.div>
                  
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                    Crafting Digital
                    <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Excellence
                    </span>
                  </h1>
                  
                  <p className="text-xs sm:text-sm text-neutral-300/90 max-w-xl mx-auto leading-relaxed">
                    Transforming ideas into reality through clean code and innovative digital solutions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Bar - Minimal Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-4 gap-2 flex-shrink-0"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="flex flex-col items-center gap-1 px-2 py-2.5 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <div className="text-center min-w-0">
                      <div className="text-base sm:text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-[9px] sm:text-[10px] text-neutral-400 truncate">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Services Section - Compact Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex-1 min-h-0"
            >
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 text-center">What We Do</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group relative rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 p-3 transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative flex items-start gap-2.5">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-4 h-4 text-purple-300" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-white mb-0.5 group-hover:text-purple-300 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-xs text-neutral-400 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Tech Stack - Icon Grid with Tooltips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 p-3 sm:p-4 overflow-hidden flex-shrink-0"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
              
              <div className="relative z-10">
                <h2 className="text-base sm:text-lg font-bold text-white mb-3 text-center">
                  Tech Stack
                </h2>
                
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {technologies.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.1, y: -4 }}
                        className="group relative"
                      >
                        {/* Icon Container */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-white/15">
                          <Icon 
                            className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-300" 
                          />
                        </div>
                        
                        {/* Tooltip - Top */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                          <div className="bg-gray-900/95 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md border border-white/10">
                            {tech.name}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </WavyBackground>
    </PageTransition>
  );
}
