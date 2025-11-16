'use client';

import { useUIStore } from '@/stores/useUIStore';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  const { activePage, goBack } = useUIStore();
  
  // Show back button on all pages except landing
  const showBackButton = activePage !== 'landing';
  
  if (!showBackButton) return null;
  
  return (
    <button
      onClick={goBack}
      className="fixed bottom-8 left-8 z-[100] group"
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border border-grid-color-strong hover:border-accent-primary bg-bg-primary/90 backdrop-blur-sm transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-accent-primary/20">
        <ArrowLeft className="w-4 h-4 text-text-tertiary group-hover:text-accent-primary transition-colors" />
        <span className="text-sm text-text-tertiary group-hover:text-accent-primary transition-colors font-medium">
          Back
        </span>
      </div>
    </button>
  );
}
