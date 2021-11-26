import axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
import { push } from "connected-react-router";
import {
  isValidEmailFormat,
  isValidRequiredInput,
} from "../../function/common";
import { sessions, TeacherIndex } from "../../urls";
import { signInTeacher, signUpTeacher } from "./actions";
import { initialStateType } from "../store/types";
import { signInParamsType, signUpParamsType } from "./types";

export const signUp = (params: signUpParamsType) => {
  const { name, email, password, passwordConfirmation } = params;

  const signUpParams = {
    teacher: {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }
  }

  return async (
    dispatch: Dispatch<Action>,
    getState: () => initialStateType
  ) => {
    const state = getState();
    const isSignedIn = state.teacher.isSignedIn;

    if (isSignedIn) {
      dispatch(push("/"));
      return false;
    }
    // バリデーション
    if (!isValidRequiredInput(email, password, passwordConfirmation)) {
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
      .post(TeacherIndex, signUpParams)
      .then((res) => {
        dispatch(signUpTeacher(res.data));
        dispatch(push("/"));
      })
      .catch(() => {
        dispatch(push("/si"));
        alert("アカウント登録に失敗しました。もう一度お試し下さい。");
      });
  };
};

export const signIn = (params: signInParamsType) => {
  const { email, password } = params;

  const signInParams = {
    teacher: {
      email: email,
      password: password
    }
  }

  return async (
    dispatch: Dispatch<Action>,
    getState: () => initialStateType
  ) => {
    const state = getState();
    const isSignedIn = state.teacher.isSignedIn;

    if (isSignedIn) {
      dispatch(push("/"));
      return false;
    }
    // バリデーション
    if (!isValidRequiredInput(email, password)) {
      alert("必須項目が未入力です。");
      return false;
    }

    return await axios
      .post(sessions, signInParams)
      .then((res) => {
        dispatch(signInTeacher(res.data));
        dispatch(push("/"));
      })
      .catch(() => {
        dispatch(push("/signin"));
        alert("ログインに失敗しました。もう一度お試し下さい。");
      });
  };
};
