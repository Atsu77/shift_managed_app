import { initialState } from "../store/initialState";
import { SIGN_IN, SIGN_OUT } from "./actions";
import { ReducerType } from "./types";

const UserReducer: ReducerType = (
  state = initialState.user,
  action
) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        isSignedIn: true
      };
    case SIGN_OUT:
      return {
        ...initialState.user
      }
    default:
      return state;
  }
};


export default UserReducer