import { Reducer } from "react";
import { LoginType } from "../sessions/types";
import { SIGN_IN, SIGN_OUT } from "./actions";

export interface UserType {
  id: string | null,
  name: string,
  email: string
  isSignedIn : boolean
}

export interface TeacherType extends UserType {
  gender?: string;
  comment?: string;
  image?: string;
}

// ActionType
export interface Actions<TType, TPayload> {
  type: TType;
  payload: TPayload;
}

type SignInAction = Actions<typeof SIGN_IN, UserType>;
type SignOutAction = Actions<typeof SIGN_OUT, UserType>;

type ActionTypes = SignInAction | SignOutAction;

// ReducerType
export type ReducerType = Reducer<UserType, ActionTypes>;

// OperationType
export type signInParamsType = {
  email: string;
  password: string;
  loginType: LoginType;
};
