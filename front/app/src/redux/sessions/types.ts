import { Reducer } from "redux";
import { SELECT_LOGIN_TYPE } from "./actions";

export type SessionType = {
  loginType: LoginType;
};

export type LoginType = "teacher" | "student" | "admin" | null;

export type signInParamsType = {
  email: string;
  password: string;
};

// ActionType
interface Actions<TType, TPayload> {
  type: TType;
  payload: TPayload;
}

type SelectLoginTypeAction = Actions<typeof SELECT_LOGIN_TYPE, LoginType>;
//type SignInAction = Actions<typeof SIGN_IN, SessionType>

type ActionTypes = SelectLoginTypeAction;

// ReducerType
export type SessionReducerType = Reducer<SessionType, ActionTypes>;
