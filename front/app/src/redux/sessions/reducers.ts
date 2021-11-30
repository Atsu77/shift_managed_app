import { initialState } from "../store/initialState";
import { SELECT_LOGIN_TYPE, SIGN_UP } from "./actions";
import { SessionReducerType } from "./types";

const SessionReducer: SessionReducerType = (state = initialState.session, action) => {
  switch (action.type) {
    case SELECT_LOGIN_TYPE:
      return {
        ...state,
        loginType: action.payload,
      };
    case SIGN_UP:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        isSignedIn: true,
      };
    default:
      return state;
  }
};

export default SessionReducer;
