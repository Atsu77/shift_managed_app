import axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
import { push } from "connected-react-router";
import { isValidRequiredInput } from "../../function/common";
import { sessions } from "../../urls";
import { initialStateType } from "../store/types";
import { LoginType, signInParamsType } from "./types";
import { selectLoginType } from "./actions";

export const selectLogin = (loginType: LoginType) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(selectLoginType(loginType));
    dispatch(push("/signup"));
  };
};

//export const signIn = (params: signInParamsType) => {
//  const { email, password } = params;

//  return async (
//    dispatch: Dispatch<Action>,
//    getState: () => initialStateType
//  ) => {
//    const state = getState();
//    const loginType = state.user.loginType;
//    const isSignedIn = state.user.isSignedIn;

//    const signInParams = () => {
//      if (loginType === "teacher") {
//        return {
//          teacher: {
//            email: params.email,
//            password: params.password,
//          },
//        };
//      } else if (loginType === "student") {
//        return {
//          student: {
//            email: params.email,
//            password: params.password,
//          },
//        };
//      }
//    };

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
