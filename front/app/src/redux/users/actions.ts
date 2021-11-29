import { UserType } from "./types";

export const SIGN_UP_TEACHER = "SIGN_UP_TEACHER";
export const signUpTeacher = (teacherInfo: UserType) => {
  return {
    type: SIGN_UP_TEACHER,
    payload: teacherInfo
  }
}

export const SIGN_IN_TEACHER = "SIGN_IN_TEACHER";
export const signInTeacher = (teacherInfo: UserType) => {
  return {
    type: SIGN_IN_TEACHER,
    payload: teacherInfo
  }
}