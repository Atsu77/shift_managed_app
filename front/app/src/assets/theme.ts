import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
      contrastText: '#795548',
    },
    background: {
      default: '#29458B',
    },
    text: { primary: '#202020' },
  },
});

export default theme;