'use client';

import { useEffect, useRef } from 'react';
import { animatePageIn, animatePageOut } from '@/lib/gsap';

type TransitionType = 'slide-left' | 'slide-right' | 'fade' | 'glitch';

interface PageTransitionProps {
  isActive: boolean;
  transitionType?: TransitionType;
  children: React.ReactNode;
}

export function PageTransition({ 
  isActive, 
  transitionType = 'slide-left',
  children 
}: PageTransitionProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    
    if (isActive) {
      animatePageIn(page, transitionType);
    } else {
      animatePageOut(page);
    }
  }, [isActive, transitionType]);
  
  if (!isActive) return null;
  
  return (
    <div 
      ref={pageRef}
      className="absolute inset-0 overflow-hidden bg-bg-primary"
    >
      {children}
    </div>
  );
}
