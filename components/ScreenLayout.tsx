'use client';

import { DitheredBackground } from '@/components/DitheredBackground';
import { GridOverlay } from '@/components/GridOverlay';
import { Navigation } from '@/components/Navigation';
import { BackButton } from '@/components/BackButton';
import { ScanLineEffect } from '@/components/ScanLineEffect';

export function ScreenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 overflow-hidden bg-bg-primary">
      {/* Background effects */}
      <DitheredBackground />
      <GridOverlay />
      
      {/* Main content area with top padding for header */}
      <main className="absolute inset-0 overflow-hidden pt-20">
        {children}
      </main>
      
      {/* Fixed navigation */}
      <Navigation />
      
      {/* Back button (conditional) */}
      <BackButton />
      
      {/* Scan line effect */}
      <ScanLineEffect />
    </div>
  );
}
