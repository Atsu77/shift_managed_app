import { Reducer } from "react";
import { initialState } from "../store/initialState";
import { initialStateType } from "../store/types";
import { FETCH_TEACHERS_PROFILE } from "./actions";

export type Teacher = {
  id: number | null;
  name: string;
  isSignedIn: boolean | null;
}

// ActionType
export interface Actions<TType, TPayload> {
  type: TType,
  payload: TPayload
}

type FetchTeachersAction = Actions<typeof FETCH_TEACHERS_PROFILE, Array<Teacher>>

type ActionTypes = FetchTeachersAction;

// ReducerType
export type ReducerType = Reducer<initialStateType, ActionTypes>;

