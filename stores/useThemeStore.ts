import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { themes, ThemeName } from '@/lib/themes';

interface ThemeStore {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      currentTheme: 'purple',
      setTheme: (theme) => {
        set({ currentTheme: theme });
        applyTheme(theme);
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);

function applyTheme(themeName: ThemeName) {
  const theme = themes[themeName];
  const root = document.documentElement;
  
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}

// Apply theme on mount
if (typeof window !== 'undefined') {
  const store = useThemeStore.getState();
  applyTheme(store.currentTheme);
}
