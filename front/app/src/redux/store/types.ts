import { Teacher } from "../teachers/types";

export type initialStateType = {
  teacher: Teacher
}

export type signUpParamsType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};