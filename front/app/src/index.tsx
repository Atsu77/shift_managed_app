import React from 'react';
import ReactDOM from 'react-dom';
import * as History from 'history';
import { ConnectedRouter } from 'connected-react-router'
import './assets/reset.css'
import App from './App';
import createStore from './redux/store/store';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './assets/theme';
import './index.css'

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
      <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
