import { initialStateType } from "./types";

export const initialState: initialStateType = {
  teachersList: [],
  teacher: {
    id: null,
    name: "",
    isSignedIn: false,
  },
};
