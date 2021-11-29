import { createSelector } from "reselect";
import { initialStateType } from "../store/types";


const teacherSelector = (state: initialStateType) => state.user

export const getSignedIn = createSelector(
  [teacherSelector],
  state => state.isSignedIn
)
