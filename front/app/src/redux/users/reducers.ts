import { initialState } from "../store/initialState";
import { SIGN_UP_TEACHER } from "./actions";
import { ReducerType } from "./types";

const UserReducer: ReducerType = (
  state = initialState.user,
  action
) => {
  switch (action.type) {
    case SIGN_UP_TEACHER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        isSignedIn: true
      };
    default:
      return state;
  }
};


export default UserReducer