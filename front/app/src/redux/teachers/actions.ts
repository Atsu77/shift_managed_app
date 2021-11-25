import { Teacher } from "./types";

export const SIGN_UP_TEACHER = "SIGN_UP_TEACHER";
export const signUpTeacher = (teacherInfo: Teacher) => {
  return {
    type: SIGN_UP_TEACHER,
    payload: teacherInfo
  }
}