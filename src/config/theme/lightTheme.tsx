import { createTheme, ThemeOptions } from '@mui/material/styles'
import baseThemeOptions from './baseTheme';
import { grey, red } from '@mui/material/colors'

const tenPercent: string = "#402d28";
const thirtyPercent: string = "#b65636";
const sixtyPercent: string = "#174d4d";
const pageBackground: string = "#dfc7a2";
const textColor: string = "#dfc7a2"

const lightThemeOptions: ThemeOptions = {
    ...baseThemeOptions,
    palette: {
        primary: {
            main: sixtyPercent,
        },
        secondary: {
            main: thirtyPercent,
        },
        background: {
            default: pageBackground,
            paper: sixtyPercent,
        },
        text: {
            primary: textColor
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
                        borderColor: sixtyPercent,
                    },
                }),
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: textColor,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: thirtyPercent,
                    '&:hover': {
                        filter: "brightness(90%)"
                    },
                    color: textColor,
                    borderRadius: "50px",
                    textTransform: 'none'
                },
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: tenPercent,
                    borderRadius: '0px'
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: thirtyPercent,
                    borderRadius: "5px"
                }
            }
        }
    }
}

export const lightTheme = createTheme(lightThemeOptions);