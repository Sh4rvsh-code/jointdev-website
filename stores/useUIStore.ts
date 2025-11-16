import { create } from 'zustand';

export type Page = 'landing' | 'projects' | 'about' | 'contact' | 'project-detail';

interface UIStore {
  activePage: Page;
  previousPage: Page | null;
  selectedProject: string | null;
  
  setActivePage: (page: Page) => void;
  goBack: () => void;
  selectProject: (id: string) => void;
}

export const useUIStore = create<UIStore>((set, get) => ({
  activePage: 'landing',
  previousPage: null,
  selectedProject: null,
  
  setActivePage: (page) => set((state) => ({
    activePage: page,
    previousPage: state.activePage,
  })),
  
  goBack: () => set((state) => ({
    activePage: state.previousPage || 'landing',
    previousPage: 'landing',
  })),
  
  selectProject: (id) => set({
    selectedProject: id,
    activePage: 'project-detail',
  }),
}));
