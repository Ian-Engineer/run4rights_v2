import { createTheme, ThemeOptions } from '@mui/material/styles'
import baseThemeOptions from './baseTheme'

const darkThemeOptions: ThemeOptions = {
    ...baseThemeOptions,
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#FFF7DA',
        },
        text: {
            primary: '#FFFFFF'
        },
        background: {
            default: '#121212',
            paper: 'rgba(30, 30, 30, 0.9)',
        },
    },
}

export const darkTheme = createTheme(darkThemeOptions)