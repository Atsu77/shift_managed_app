import { connectRouter, routerMiddleware } from "connected-react-router";
import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
  compose
} from "redux";
import thunk from "redux-thunk";
import TeacherReducer from "../teachers/reducers";

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

declare var window: ExtendedWindow;

export default function createStore(history: any) {
  const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let middleWares = [routerMiddleware(history), thunk];

  return reduxCreateStore(
    combineReducers({
      teacher: TeacherReducer,
      router: connectRouter(history),
    }),
    composeReduxDevToolsEnhancers(applyMiddleware(...middleWares))
  );
}
