'use client';

import { ReactNode, useMemo } from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
    PaletteMode,
} from '@mui/material/styles';
import {
    ThemeProvider as StyledThemeProvider,
    createGlobalStyle,
} from 'styled-components';
import SideBar from '@/components/sideBar/SideBar';

const light = {
    colors: {
        primaryBackground: '#ffffff',
        secondaryBackground: '#f5f5f5',
        textBackground: '#e3f2fd',
        primaryTextColor: '#333333',
        secondaryTextColor: '#1976d2',
        mainScreenBgc: '#fafafa',
        switchBgc: '#e0e0e0',
        switchBgcHover: '#d5d5d5',
        muiPrimary: '#1976d2',
        muiSecondary: '#e3f2fd',
    },
};

const dark = {
    colors: {
        primaryBackground: '#121212',
        secondaryBackground: '#1e1e1e',
        textBackground: '#0d47a1',
        primaryTextColor: '#90caf9',
        secondaryTextColor: '#e0e0e0',
        mainScreenBgc: '#1a1a1a',
        switchBgc: '#2c2c2c',
        switchBgcHover: '#424242',
        muiPrimary: '#90caf9',
        muiSecondary: '#0d47a1',
    },
};

const getMuiTheme = (theme: typeof light | typeof dark, mode: PaletteMode) =>
    createTheme({
        palette: {
            mode,
            background: {
                default: theme.colors.primaryBackground,
                paper: theme.colors.secondaryBackground,
            },
            text: {
                primary: theme.colors.primaryTextColor,
                secondary: theme.colors.secondaryTextColor,
            },
            primary: {
                main: theme.colors.muiPrimary,
            },
            secondary: {
                main: theme.colors.muiSecondary,
            },
        },
    });

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.primaryBackground};
    color: ${(props) => props.theme.colors.primaryTextColor};
    transition: background-color 0.3s, color 0.3s;
  }

  [data-theme] body {
    transition: none !important;
  }
`

export default function ClientLayout({ children }: { children: ReactNode }) {
    const { currentTheme } = useTheme();
    const isLight = currentTheme === 'light';
    const styledTheme = isLight ? light : dark;
    const muiTheme = useMemo(
        () => getMuiTheme(styledTheme, currentTheme as PaletteMode),
        [styledTheme, currentTheme]
    );

    return (
        <MuiThemeProvider theme={muiTheme}>
            <StyledThemeProvider theme={styledTheme}>
                <GlobalStyle />
                <header className="bg-blue-600 text-white px-4 py-3 flex items-center">
                    <h1 className="flex-grow">AI Assistant for Developers</h1>
                    <SideBar />
                </header>
                {children}
            </StyledThemeProvider>
        </MuiThemeProvider>
    );
}
