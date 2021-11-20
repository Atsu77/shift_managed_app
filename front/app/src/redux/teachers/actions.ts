import { Teacher } from "./types";

export const FETCH_TEACHERS_PROFILE = "FETCH_TEACHERS_PROFILE";
export const fetchTeachersListAction = (TeacherList: Array<Teacher>) => {
  return {
    type: "FETCH_TEACHERS_PROFILE",
    payload: TeacherList
  }
}