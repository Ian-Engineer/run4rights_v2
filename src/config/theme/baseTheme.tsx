import { ThemeOptions } from "@mui/material";

const baseThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: ['Roboto', 'Helvetica'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Reset just for AppBar
        },
      },
    },
  },
};

export default baseThemeOptions;