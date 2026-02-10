import { createTheme, ThemeOptions } from '@mui/material/styles'
import baseThemeOptions from './baseTheme';
import { red } from '@mui/material/colors'

export const tenPercent: string = "#402d28";
export const thirtyPercent: string = "#b65636";
export const sixtyPercent: string = "#174d4d";
export const pageBackground: string = "#F5DAB1"; //F5DAB1
export const textColor: string = "#F5DAB1" //dfc7a2

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
            main: red[600],
        },
    },
    components: {
        ...baseThemeOptions.components,
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: sixtyPercent,
                    fontWeight: 600,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
            root: {
                color: sixtyPercent, // default label color
                '&.Mui-focused': {
                color: sixtyPercent, // label color when focused
                },
            },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: sixtyPercent,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: sixtyPercent,
                    },
                },
                notchedOutline: {
                    borderColor: sixtyPercent,
                },
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
                    backgroundColor: sixtyPercent,
                    borderRadius: "5px"
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: pageBackground,
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    '& .MuiSvgIcon-root': {
                          color: thirtyPercent,
                    },
                    '&.Mui-checked .MuiSvgIcon-root': {
                        color: thirtyPercent,
                    }
                },
            },
        },
    }
}

export const lightTheme = createTheme(lightThemeOptions);