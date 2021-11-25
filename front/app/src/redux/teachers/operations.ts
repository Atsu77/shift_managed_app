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

export type signUpParamsType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

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
        alert("アカウント登録に失敗しました。もう一度お試し下さい。");
      });
  };
};
