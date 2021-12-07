import { LoginType, signUpParamsType } from "./types";

export const SELECT_LOGIN_TYPE = "SELECT_LOGIN_TYPE";
export const selectLoginType = (loginType: LoginType) => {
  return {
    type: SELECT_LOGIN_TYPE,
    payload: loginType
  }
}


export const SIGN_UP = "SIGN_UP";
export const signUpAction = (userInfo: signUpParamsType) => {
  return {
    type: SIGN_UP,
    payload: userInfo
  }
}