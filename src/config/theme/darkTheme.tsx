import { createTheme, ThemeOptions } from '@mui/material/styles'
import baseThemeOptions from './baseTheme'
import { grey, red } from '@mui/material/colors'

const tenPercent: string = "#EF8354";
const thirtyPercent: string = "#177E80";
const sixtyPercent: string = "#DBD8B3";
const pageBackground: string = "#60463B";
const textColor: string = "#FFF"
const contrastTextColor: string = "#000"

const darkThemeOptions: ThemeOptions = {
    ...baseThemeOptions,
    palette: {
        primary: {
            main: textColor,
        },
        secondary: {
            main: contrastTextColor,
        },
        textField: {
            border: grey[400],
        },
        text: {
            primary: textColor,
            secondary: contrastTextColor
        },
        background: {
            default: pageBackground,
            paper: sixtyPercent,
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
                    color: contrastTextColor,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                backgroundColor: tenPercent, // ← your custom color
                '&:hover': {
                    filter: "brightness(90%)"
                },
                color: contrastTextColor,
                },
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: sixtyPercent
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: thirtyPercent,
                }
            }
        }
    },
}

export const darkTheme = createTheme(darkThemeOptions)