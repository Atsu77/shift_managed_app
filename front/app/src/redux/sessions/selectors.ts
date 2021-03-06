import { createSelector } from "reselect";
import { initialStateType } from "../store/types";


const userSelector = (state: initialStateType) => state.session

export const getLoginType = createSelector(
  [userSelector],
  state => state.loginType
)