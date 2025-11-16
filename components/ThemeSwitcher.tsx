'use client';

import { useState } from 'react';
import { useThemeStore } from '@/stores/useThemeStore';
import { themes, ThemeName } from '@/lib/themes';
import { Palette, X } from 'lucide-react';

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme } = useThemeStore();
  
  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[200] w-14 h-14 rounded-full bg-accent-primary text-bg-primary shadow-lg hover:shadow-accent-primary/50 transition-all duration-300 flex items-center justify-center group hover:scale-110"
        title="Change Theme"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Palette className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        )}
      </button>
      
      {/* Theme Selector Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-[200] bg-bg-secondary border border-grid-color-strong rounded-lg p-6 shadow-2xl backdrop-blur-xl w-80">
          <div className="mb-4">
            <h3 className="font-display text-lg font-bold text-text-primary mb-1">
              Choose Your Theme
            </h3>
            <p className="font-body text-xs text-text-tertiary">
              Click to preview instantly
            </p>
          </div>
          
          <div className="space-y-3">
            {(Object.keys(themes) as ThemeName[]).map((themeKey) => {
              const theme = themes[themeKey];
              const isActive = currentTheme === themeKey;
              
              return (
                <button
                  key={themeKey}
                  onClick={() => setTheme(themeKey)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    isActive 
                      ? 'border-accent-primary bg-accent-primary/10' 
                      : 'border-grid-color-strong hover:border-accent-primary/50 hover:bg-bg-primary'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-technical text-sm text-text-primary">
                      {theme.name}
                    </span>
                    {isActive && (
                      <span className="text-xs font-technical text-accent-primary">
                        [ACTIVE]
                      </span>
                    )}
                  </div>
                  
                  {/* Color Preview */}
                  <div className="flex gap-2">
                    <div 
                      className="w-8 h-8 rounded border border-grid-color" 
                      style={{ backgroundColor: theme.colors['bg-primary'] }}
                      title="Background"
                    />
                    <div 
                      className="w-8 h-8 rounded border border-grid-color" 
                      style={{ backgroundColor: theme.colors['accent-primary'] }}
                      title="Accent"
                    />
                    <div 
                      className="w-8 h-8 rounded border border-grid-color" 
                      style={{ backgroundColor: theme.colors['text-primary'] }}
                      title="Text"
                    />
                  </div>
                </button>
              );
            })}
          </div>
          
          <div className="mt-4 pt-4 border-t border-grid-color-strong">
            <p className="font-technical text-[10px] text-text-tertiary text-center">
              Theme persists across sessions
            </p>
          </div>
        </div>
      )}
      
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[199] bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
