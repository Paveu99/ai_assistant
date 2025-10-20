'use client';

import { useUserStore } from '@/store/useUserStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export interface LoginResponse {
    success: boolean;
    user: {
        id: string;
        name: string;
        surname: string;
        email: string;
        username: string;
    };
}

type LoginPayload = {
    email: string;
    password: string;
};

export const useLoginMutation = () => {
    const queryClient = useQueryClient();
    const setUser = useUserStore(state => state.setUser);

    const { mutate, data, error, isPending, isSuccess } = useMutation<
        LoginResponse,
        Error,
        LoginPayload
    >({
        mutationKey: ['login'],
        mutationFn: async (payload: LoginPayload) => {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Login failed');
            }

            return res.json();
        },
        onSuccess: async (data: LoginResponse) => {
            await queryClient.setQueryData(['currentUser'], data.user);
            setUser(data.user);
        },
    });

    return { mutate, data, error, isPending, isSuccess };
};
