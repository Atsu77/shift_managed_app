import axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
import { push } from "connected-react-router";
import {
  isValidEmailFormat,
  isValidRequiredInput,
} from "../../function/common";
import { initialStateType } from "../store/types";
import { LoginType, signUpParamsType } from "./types";
import { selectLoginType, signUpAction } from "./actions";
import { StudentIndex, TeacherIndex } from "../../urls";

export const selectLogin = (loginType: LoginType) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(selectLoginType(loginType));
    dispatch(push("/signup"));
  };
};

export const signUp = (params: signUpParamsType) => {
  const { name, email, password, passwordConfirmation } = params;

  return async (
    dispatch: Dispatch<Action>,
    getState: () => initialStateType
  ) => {
    const state = getState();
    const loginType = state.session.loginType;
    const isSignedIn = state.user.isSignedIn;
    const requestParams = {
      name: params.name,
      email: params.email,
      password: params.password,
      password_confirmation: params.passwordConfirmation,
    }

    const requests =
    loginType === 'teacher' ?
    {
      url: TeacherIndex,
      params: {
        teacher: requestParams
      }
    }
    :
    {
      url: StudentIndex,
      params: {
        student: requestParams
      }
    }


    if (isSignedIn) {
      dispatch(push("/"));
      return false;
    }
    // バリデーション
    if (!isValidRequiredInput(name, email, password, passwordConfirmation)) {
      alert("必須項目が未入力です。");
      return false;
    }

    if (!isValidEmailFormat(email)) {
      alert("メールの形式が不正です。もう一度お試し下さい");
      return false;
    }

    if (password !== passwordConfirmation) {
      alert("パスワードが一致しません。もう一度お試し下さい。");
      return false;
    }

    if (password.length < 6) {
      alert("パスワードは6文字以上で入力して下さい");
    }


    return await axios
      .post(requests.url, requests.params)
      .then((res) => {
        dispatch(signUpAction(res.data));
        dispatch(push("/"));
      })
      .catch((err) => {
        alert(err);
      });
  };
};
