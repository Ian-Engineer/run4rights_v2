import { createTheme, ThemeOptions } from '@mui/material/styles'
import baseThemeOptions from './baseTheme';

const lightThemeOptions: ThemeOptions = {
    ...baseThemeOptions,
    palette: {
        primary: {
            main: '#FFEA9C',
        },
        secondary: {
            main: '#FFF7DA',
        },
        background: {
            default: '#FFF7DA',
            paper: 'rgba(255, 255, 255, 0.9)'
        }
    },
}

export const lightTheme = createTheme(lightThemeOptions);