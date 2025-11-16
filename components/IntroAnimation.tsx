'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const tl = gsap.timeline({ onComplete });
    
    // Terminal boot sequence
    tl.to('.boot-text', {
      opacity: 1,
      duration: 0.1,
      stagger: 0.05,
    })
    .to('.boot-text', {
      opacity: 0,
      duration: 0.3,
      delay: 0.5,
    })
    .to('.logo-text', {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    })
    .to('.logo-text', {
      opacity: 0,
      scale: 1.1,
      duration: 0.3,
      delay: 0.5,
    })
    .to(container, {
      opacity: 0,
      duration: 0.3,
    });
    
  }, [onComplete]);
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-bg-primary z-[9999] flex items-center justify-center"
    >
      <div className="text-center">
        {/* Boot sequence */}
        <div className="mb-8 space-y-1">
          <div className="boot-text opacity-0 font-technical text-xs text-accent-primary">
            [INITIALIZING_SYSTEM]
          </div>
          <div className="boot-text opacity-0 font-technical text-xs text-accent-primary">
            [LOADING_MODULES]
          </div>
          <div className="boot-text opacity-0 font-technical text-xs text-accent-primary">
            [ESTABLISHING_CONNECTION]
          </div>
          <div className="boot-text opacity-0 font-technical text-xs text-accent-primary">
            [READY]
          </div>
        </div>
        
        {/* Logo */}
        <div className="logo-text opacity-0 scale-95">
          <h1 className="font-display text-6xl font-bold text-accent-primary mb-2 accent-glow">
            JOINTDEV
          </h1>
          <div className="font-technical text-xs text-accent-primary">
            v1.0.0
          </div>
        </div>
      </div>
    </div>
  );
}
