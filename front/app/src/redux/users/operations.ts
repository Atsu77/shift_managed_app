import axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
import { push } from "connected-react-router";
import {
  isValidRequiredInput,
} from "../../function/common";
import { initialStateType } from "../store/types";
import { signInParamsType } from "./types";
import { sessions } from "../../urls";
import { signInUser } from "./actions";
import { selectLoginType } from "../sessions/actions";

export const signIn = (params: signInParamsType) => {
  const { email, password } = params;

  return async (
    dispatch: Dispatch<Action>,
    getState: () => initialStateType
  ) => {
    const state = getState();
    const isSignedIn = state.user.isSignedIn;

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
    .post(sessions, 
      {
        session: {
          email: params.email,
          password: params.password,
          login_type: params.loginType
        }
      })
      .then((res) => {
        dispatch(signInUser(res.data.user));
        dispatch(selectLoginType(params.loginType));
        dispatch(push("/"));
      })
      .catch(() => {
        dispatch(push("/signin"));
        alert("ログインに失敗しました。もう一度お試し下さい。");
      });
  };
};

