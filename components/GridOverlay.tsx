'use client';

export function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      {/* Vertical lines */}
      <div className="absolute inset-0 grid grid-cols-12 gap-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-grid-color" />
        ))}
      </div>
      {/* Horizontal lines */}
      <div className="absolute inset-0 grid grid-rows-12 gap-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-b border-grid-color" />
        ))}
      </div>
    </div>
  );
}
