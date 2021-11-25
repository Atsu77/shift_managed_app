import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#fffb75',
      main: '#EFE904',
      contrastText: '#202020',
    },
    secondary: {
      light: '#c1b0f7',
      main: '#7F5AF0',
      contrastText: '#ffe'
    },
    background: {
      default: '#29458B',
    },
    text: { primary: '#202020' },
  },
});

export default theme;