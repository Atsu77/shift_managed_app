import { initialState } from "../store/initialState";
import { SIGN_IN_TEACHER, SIGN_UP_TEACHER } from "./actions";
import { ReducerType } from "./types";

const TeacherReducer: ReducerType = (
  state = initialState.teacher,
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
    case SIGN_IN_TEACHER:
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


export default TeacherReducer