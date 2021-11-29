import { LoginType } from "./types";

export const SELECT_LOGIN_TYPE = "SELECT_LOGIN_TYPE";
export const selectLoginType = (loginType: LoginType) => {
  return {
    type: SELECT_LOGIN_TYPE,
    payload: loginType
  }
}


//export const SIGN_IN = "SIGN_IN";
//export const signInUser = (userInfo: Type) => {
//  return {
//    type: SIGN_IN,
//    payload: userInfo
//  }
//}