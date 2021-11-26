import { Reducer } from "react";
import { UserType } from "../sessions/types";
import { SIGN_UP_TEACHER } from "./actions";

// ActionType
export interface Actions<TType, TPayload> {
  type: TType,
  payload: TPayload
}

type SignUpTeacherAction = Actions<typeof SIGN_UP_TEACHER, UserType>

type ActionTypes = SignUpTeacherAction;

// ReducerType
export type ReducerType = Reducer<UserType, ActionTypes>;

// OperationType
export type signUpParamsType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type signInParamsType = {
  email: string;
  password: string;
};