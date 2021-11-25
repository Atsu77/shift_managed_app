import React from "react";
import ReactDOM from "react-dom";
import * as History from "history";
import { ConnectedRouter } from "connected-react-router";
import './assets/reset.css'
import './assets/style.css'

import './index.css'
import App from "./App";
import createStore from "./redux/store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./assets/theme";
import { CssBaseline } from "@material-ui/core";

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
