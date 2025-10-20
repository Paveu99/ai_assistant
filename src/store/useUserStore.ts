import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
    id: string;
    name: string;
    surname: string;
    email: string;
    username: string;
}

interface UserState {
    user: User | null;
    isLoggedIn: boolean;
    setUser: (user: User) => void;
    clear: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        set => ({
            user: null,
            isLoggedIn: false,
            setUser: user => set({ user, isLoggedIn: true }),
            clear: () => set({ user: null, isLoggedIn: false }),
        }),
        {
            name: 'user',
            version: 1,
        }
    )
);
