import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserPreferences } from '@/types';

interface ThemeStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (dark: boolean) => void;
}

export const useThemeStore = create<ThemeStore>(
  persist(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      setDarkMode: (dark: boolean) => set({ darkMode: dark }),
    }),
    {
      name: 'theme-storage',
    }
  )
);

interface UserStore {
  userId: string | null;
  isAuthenticated: boolean;
  setUser: (userId: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>(
  persist(
    (set) => ({
      userId: null,
      isAuthenticated: false,
      setUser: (userId: string) => set({ userId, isAuthenticated: true }),
      logout: () => set({ userId: null, isAuthenticated: false }),
    }),
    {
      name: 'user-storage',
    }
  )
);
