import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@/context/ThemeContext';
import ClientLayout from './clientLayout';
import { QueryProvider } from '@/lib/query-providers';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'AI Assistant',
    description: 'Application that helps developers work faster and more efficiently',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="light" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
                <AppRouterCacheProvider>
                    <ThemeProvider>
                        <QueryProvider>
                            <ClientLayout>
                                {children}
                            </ClientLayout>
                        </QueryProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
