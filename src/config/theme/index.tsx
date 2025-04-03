import { ThemeProvider } from "@mui/material";
import React, { createContext, useMemo, useState, useContext } from 'react';
import { CssBaseline } from "@mui/material";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

type ColorMode = 'light' | 'dark';

interface ThemeContextType {
    mode: ColorMode;
    toggleColorMode: () => void;
}

const ThemeModeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
    const context = useContext(ThemeModeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
}

export const ThemeModeProvider = ({ children }:{ children: React.ReactNode }) => {
    const [ mode, setMode ] = useState<ColorMode>('light');

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'light' ? 'light' : 'dark'))
    }

    const theme = useMemo(()=> (mode === 'light' ? lightTheme : darkTheme), [mode])

    return (
        <ThemeModeContext.Provider value={{mode, toggleColorMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    )
}