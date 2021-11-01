import { createTheme } from '@material-ui/core/styles';
import '@fontsource/comfortaa'; // Defaults to weight 400.

// import bg from '../img/backImg.png';
export const theme = createTheme({
  palette: {
    primary: {
      light: '#DBBC57',
      main: '#d4af37',
      dark: '#B99727',
    },
    secondary: {
      light: '#8d021f',
      main: '#700118',
      dark: '#540112',
    },
    text: {
      secondary: '#ffffff',
    },
    background: {
      paper: '#ff0000',
      //   default: '#FFF3F1',
      default: '#ff0000',
    },
  },
  typography: {
    fontFamily: '"comfortaa","Roboto", "Helvetica", "Arial", sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage: `linear-gradient(to left bottom, #007237, #007867, #00799a, #0075c0, #0068ca, #6d5dc5, #9f4eb6, #c33c9d, #e84b7b, #f46f5d, #ee974e, #dbbc57)`,
          height: '100vh',
        },
      },
    },
  },
});
