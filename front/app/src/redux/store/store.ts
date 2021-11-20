import { routerMiddleware } from "connected-react-router";
import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
} from "redux";
import thunk from "redux-thunk";
import { TeacherReducer } from "../teachers/reducers";

export default function createStore(history: any) {
  let middleWares = [routerMiddleware(history), thunk];

  return reduxCreateStore(
    combineReducers({
      teachers: TeacherReducer,
    }),
    applyMiddleware(...middleWares)
  );
}
