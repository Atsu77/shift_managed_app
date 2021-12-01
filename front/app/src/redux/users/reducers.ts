import { initialState } from "../store/initialState";
import { SIGN_IN } from "./actions";
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
    default:
      return state;
  }
};


export default UserReducer