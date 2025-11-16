'use client';

export function DitheredBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-bg-secondary opacity-40" />
      
      {/* Radial glow - top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-primary/20 rounded-full blur-[120px] opacity-20" />
      
      {/* Radial glow - bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-secondary/15 rounded-full blur-[100px] opacity-20" />
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
    </div>
  );
}
