'use client';

export function ScanLineEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[999]">
      <div className="scanline-effect absolute w-full h-px bg-gradient-to-b from-transparent via-accent-primary/20 to-transparent" />
    </div>
  );
}
