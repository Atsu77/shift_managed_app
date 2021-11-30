import { Reducer } from "redux";
import { SELECT_LOGIN_TYPE, SIGN_UP } from "./actions";

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

type SelectLoginTypeActionType = Actions<typeof SELECT_LOGIN_TYPE, LoginType>;
type SignUpActionType = Actions<typeof SIGN_UP, signUpParamsType>

type ActionTypes = SelectLoginTypeActionType | SignUpActionType;

// ReducerType
export type SessionReducerType = Reducer<SessionType, ActionTypes>;

// OperationType
export type signUpParamsType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

