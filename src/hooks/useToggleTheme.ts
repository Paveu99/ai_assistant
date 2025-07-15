'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export const useToggleTheme = () => {
    const [currentTheme, setCurrentTheme] = useState<Theme | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = storedTheme || systemTheme;
        setCurrentTheme(initialTheme);
        document.documentElement.dataset.theme = initialTheme;
    }, []);

    const toggleTheme = () => {
        setCurrentTheme(prev => {
            const newTheme = prev === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            document.documentElement.dataset.theme = newTheme;
            return newTheme;
        });
    };

    return {
        currentTheme,
        toggleTheme
    };
}
