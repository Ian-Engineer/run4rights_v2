import { createTheme, ThemeOptions } from '@mui/material/styles'

const lightThemeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#FFF7DA',
        },
        secondary: {
            main: '#FFF7DA',
        },
        background: {
            default: '#FFF7DA',
        }
    },
    typography: {
        fontFamily: ['Roboto', 'Helvetica'].join(',')
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize'
                }
            }
        }
    }
}

export const lightTheme = createTheme(lightThemeOptions);