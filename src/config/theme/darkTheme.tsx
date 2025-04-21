import { createTheme, ThemeOptions } from '@mui/material/styles'
import baseThemeOptions from './baseTheme'
import { grey, red } from '@mui/material/colors'

const darkThemeOptions: ThemeOptions = {
    ...baseThemeOptions,
    palette: {
        primary: {
            main: '#2D4A58',
        },
        secondary: {
            main: '#FFFFFF',
        },
        textField: {
            border: grey[400],
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF'
        },
        background: {
            default: '#223843',
            // default: "#3F4A5F",
            paper: 'rgba(58, 92, 108, 0.88)',
        },
        error: {
            main: red[200],
        },
    },
    components: {
        ...baseThemeOptions.components,
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.textField.border,
                },
                }),
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                color: grey[400],
                },
            },
        },
    },
}

export const darkTheme = createTheme(darkThemeOptions)