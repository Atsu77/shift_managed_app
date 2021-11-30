import axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
import { push } from "connected-react-router";
import {
  isValidEmailFormat,
  isValidRequiredInput,
} from "../../function/common";
import { TeacherIndex } from "../../urls";
import { signUpTeacher } from "./actions";
import { initialStateType } from "../store/types";
//import { signUpParamsType } from "./types";

//export const signUp = (params: signInParamsType) => {
//  const { email, password } = params;

//  return async (
//    dispatch: Dispatch<Action>,
//    getState: () => initialStateType
//  ) => {
//    const state = getState();
//    const loginType = state.user.loginType;
//    const isSignedIn = state.user.isSignedIn;



//    if (isSignedIn) {
//      dispatch(push("/"));
//      return false;
//    }
//    // バリデーション
//    if (!isValidRequiredInput(email, password)) {
//      alert("必須項目が未入力です。");
//      return false;
//    }

//    return await axios
//      .post(sessions, signInParams)
//      .then((res) => {
//        dispatch(signInUser(res.data));
//        dispatch(push("/"));
//      })
//      .catch(() => {
//        dispatch(push("/signin"));
//        alert("ログインに失敗しました。もう一度お試し下さい。");
//      });
//  };
//};

