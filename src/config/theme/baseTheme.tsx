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
  },
};

export default baseThemeOptions;