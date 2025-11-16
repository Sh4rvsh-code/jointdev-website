'use client';

export function TechnicalHeader() {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  return (
    <header className="fixed top-0 left-0 right-0 h-8 border-b border-grid-color-strong bg-bg-primary/90 backdrop-blur-md z-50 flex items-center justify-between px-8 transition-colors duration-300">
      <div className="flex items-center gap-4">
        <span className="font-technical text-[10px] text-text-tertiary">
          [{currentTime}]
        </span>
        <span className="font-technical text-xs text-accent-primary">
          JOINTDEV.STUDIO v1.0
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-accent-primary rounded-full animate-pulse shadow-lg shadow-accent-primary/50" />
        <span className="font-technical text-[10px] text-accent-primary">
          [ONLINE]
        </span>
      </div>
    </header>
  );
}
