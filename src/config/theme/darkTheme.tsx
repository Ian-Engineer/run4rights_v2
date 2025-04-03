import { createTheme, ThemeOptions } from '@mui/material/styles'

const darkThemeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#FFF7DA',
        },
        secondary: {
            main: '#FFF7DA',
        },
        background: {
            default: '#00000',
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

export const darkTheme = createTheme(darkThemeOptions)