import { initialState } from "../store/initialState";
import * as Actions from "./actions";
import { ReducerType } from "./types";

export const TeacherReducer: ReducerType = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Actions.FETCH_TEACHERS_PROFILE:
      return {
        ...state,
        teachersList: action.payload
      };
    default:
      return state;
  }
};
