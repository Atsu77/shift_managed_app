import { Reducer } from "react";
import { SIGN_UP_TEACHER } from "./actions";

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

type SignUpTeacherAction = Actions<typeof SIGN_UP_TEACHER, UserType>;

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
