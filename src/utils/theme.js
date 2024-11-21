import { createTheme } from "@mui/material";
import RammanettoOne from "../assets/fonts/RammettoOne-Regular.ttf"

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A1846",
    },
    secondary: {
      main: "#4FD48C",
    },
    background: {
      default: "#2A1846",
    },
  },
  typography: {
    fontFamily: 'Rammetto One, Static',
    h4: {
      fontWeight: "bold",
      fontSize: "24px",
      textAlign: "center",
      color:'white'
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Rammetto One';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${RammanettoOne}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  }, 
});

export default theme;
