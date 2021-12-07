import { connectRouter, routerMiddleware } from "connected-react-router";
import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
  compose
} from "redux";
import thunk from "redux-thunk";
import SessionReducer from "../sessions/reducers";
import UserReducer from "../users/reducers";

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

declare var window: ExtendedWindow;

export default function createStore(history: any) {
  // eslint-disable-next-line no-mixed-operators
  const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let middleWares = [routerMiddleware(history), thunk];

  return reduxCreateStore(
    combineReducers({
      session: SessionReducer, 
      user: UserReducer,
      router: connectRouter(history),
    }),
    composeReduxDevToolsEnhancers(applyMiddleware(...middleWares))
  );
}
