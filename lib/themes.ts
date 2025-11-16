export const themes = {
  purple: {
    name: 'Midnight Purple Elegance',
    colors: {
      'bg-primary': '#0f0a1e',
      'bg-secondary': '#1a0f2e',
      'text-primary': '#ffffff',
      'text-secondary': '#b8b8b8',
      'text-tertiary': '#7a7a7a',
      'accent-primary': '#a78bfa',
      'accent-secondary': '#c4b5fd',
      'grid-color': '#1e1435',
      'grid-color-strong': '#2d1f4d',
    }
  },
  slate: {
    name: 'Slate Modern Minimal',
    colors: {
      'bg-primary': '#0f172a',
      'bg-secondary': '#1e293b',
      'text-primary': '#ffffff',
      'text-secondary': '#cbd5e1',
      'text-tertiary': '#94a3b8',
      'accent-primary': '#38bdf8',
      'accent-secondary': '#7dd3fc',
      'grid-color': '#1e293b',
      'grid-color-strong': '#334155',
    }
  },
  indigo: {
    name: 'Dark Indigo Premium',
    colors: {
      'bg-primary': '#0a0e27',
      'bg-secondary': '#151b3d',
      'text-primary': '#f8fafc',
      'text-secondary': '#94a3b8',
      'text-tertiary': '#64748b',
      'accent-primary': '#6366f1',
      'accent-secondary': '#818cf8',
      'grid-color': '#1e293b',
      'grid-color-strong': '#334155',
    }
  },
};

export type ThemeName = keyof typeof themes;
