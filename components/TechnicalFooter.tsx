'use client';

export function TechnicalFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-12 border-t border-grid-color-strong bg-bg-primary z-50 flex items-center justify-between px-8">
      <span className="font-technical text-[10px] text-text-tertiary">
        © 2025 JOINTDEV
      </span>
      <span className="font-technical text-[10px] text-text-tertiary">
        NEW YORK CITY
      </span>
      <span className="font-technical text-[10px] text-text-tertiary">
        [40.7128°N, 74.0060°W]
      </span>
    </footer>
  );
}
