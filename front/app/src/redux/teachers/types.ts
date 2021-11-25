import { Reducer } from "react";
import { initialStateType } from "../store/types";
import { SIGN_UP_TEACHER } from "./actions";

export type Teacher = {
  id: number | null;
  name: string;
  email: string;
  isSignedIn: boolean | null;
}

// ActionType
export interface Actions<TType, TPayload> {
  type: TType,
  payload: TPayload
}

type SignUpTeacherAction = Actions<typeof SIGN_UP_TEACHER, Teacher>

type ActionTypes = SignUpTeacherAction;

// ReducerType
export type ReducerType = Reducer<Teacher, ActionTypes>;

