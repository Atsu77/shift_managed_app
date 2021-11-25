import { createSelector } from "reselect";
import { initialStateType } from "../store/types";


const teacherSelector = (state: initialStateType) => state.teacher

export const getSignedIn = createSelector(
  [teacherSelector],
  state => state.isSignedIn
)
