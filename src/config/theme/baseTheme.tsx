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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
        //   backgroundImage: `url('/background.gif')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        },
      },
    },
  },
};

export default baseThemeOptions;