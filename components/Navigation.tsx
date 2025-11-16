'use client';

import { useUIStore } from '@/stores/useUIStore';
import { ChevronRight } from 'lucide-react';

export function Navigation() {
  const { setActivePage, activePage } = useUIStore();
  
  const navItems = [
    { label: 'Home', page: 'landing' as const },
    { label: 'Projects', page: 'projects' as const },
    { label: 'About', page: 'about' as const },
    { label: 'Contact', page: 'contact' as const },
  ];
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Company Header - Centered */}
      <div className="w-full flex justify-center pt-6 pb-4">
        <h1 className="text-2xl font-mono font-bold text-text-primary tracking-wider flex items-center gap-2">
          <span className="text-accent-primary">&lt;/&gt;</span>
          Joint Dev
        </h1>
      </div>
      
      {/* Breadcrumb Navigation - Top Left */}
      <nav className="absolute top-6 left-8">
        <div className="flex items-center gap-2">
          {navItems.map((item, index) => (
            <div key={item.page} className="flex items-center gap-2">
              <button
                onClick={() => setActivePage(item.page)}
                className={`font-medium text-sm transition-all duration-300 ${
                  activePage === item.page 
                    ? 'text-accent-primary' 
                    : 'text-text-tertiary hover:text-text-secondary'
                }`}
              >
                {item.label}
              </button>
              {index < navItems.length - 1 && (
                <ChevronRight className="w-4 h-4 text-text-tertiary/50" />
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
