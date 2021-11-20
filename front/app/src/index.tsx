import React from 'react';
import ReactDOM from 'react-dom';
import * as History from 'history';
import './assets/reset.css'
import App from './App';
import createStore from './redux/store/store';
import { Provider } from 'react-redux';

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
