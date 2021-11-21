import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: "#f5f2ab",
      main: "#EEE84D",
      contrastText: "#333333"
    },
    secondary: {
      main: "#795EE8",
      contrastText: "#F5F4FD"
    }
  },
});
