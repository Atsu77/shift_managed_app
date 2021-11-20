import { routerMiddleware } from "connected-react-router";
import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { TeacherReducer } from "../teachers/reducers";

export default function createStore(history: any) {
  let middleWares = [routerMiddleware(history), thunk];
  const composeEnhancers =
    process.env.NODE_ENV === "development" &&
    typeof window === "object" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  return reduxCreateStore(
    combineReducers({
      teachers: TeacherReducer,
    }),
    composeEnhancers(applyMiddleware(...middleWares))
  );
}
