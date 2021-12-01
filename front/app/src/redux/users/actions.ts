import { UserType } from "./types";

export const SIGN_IN = "SIGN_IN";
export const signInUser = (userInfo: UserType) => {
  return {
    type: SIGN_IN,
    payload: userInfo
  }
}