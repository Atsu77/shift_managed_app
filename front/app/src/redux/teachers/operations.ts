import { Dispatch } from "react";
import { Action } from "redux";
import { TeacherIndex } from "../../urls";
import { fetchTeachersListAction } from "./actions";

export const fetchTeachers = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response: any = await fetch(TeacherIndex)
      .then((res) => res.json())
      .catch((err) => console.error(err));

    dispatch(fetchTeachersListAction(response));
  };
};


