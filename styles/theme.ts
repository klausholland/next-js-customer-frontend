import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#859aa4',
    },
    secondary: {
      main: '#ededed',
    },
    text: {
      primary: '#ededed',
      secondary: '#859aa4',
    },
  },
  typography: {
    fontFamily: `"Roboto", sans-serif`,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
    },
  },
});

export default theme;
