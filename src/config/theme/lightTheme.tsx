import { createTheme, ThemeOptions } from '@mui/material/styles'
import baseThemeOptions from './baseTheme';
import { grey, red } from '@mui/material/colors'

const tenPercent: string = "#177E89";
const thirtyPercent: string = "#EF8354";
const sixtyPercent: string = "#60463B";
const pageBackground: string = "#DBD8B3";
const textColor: string = "#000"
const contrastTextColor: string = "#FFF"

const lightThemeOptions: ThemeOptions = {
    ...baseThemeOptions,
    palette: {
        primary: {
            main: textColor,
        },
        secondary: {
            main: contrastTextColor,
        },
        background: {
            default: pageBackground,
            paper: sixtyPercent,
        },
        text: {
            primary: textColor,
            secondary: contrastTextColor
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
    }
}

export const lightTheme = createTheme(lightThemeOptions);