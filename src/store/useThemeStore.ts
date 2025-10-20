import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
    currentTheme: ThemeMode;
    toggleTheme: () => void;
    setTheme: (mode: ThemeMode) => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => ({
            currentTheme: 'light',
            toggleTheme: () =>
                set({ currentTheme: get().currentTheme === 'light' ? 'dark' : 'light' }),
            setTheme: mode => set({ currentTheme: mode }),
        }),
        {
            name: 'theme',
            version: 1,
        }
    )
);
