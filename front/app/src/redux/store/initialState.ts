import { initialStateType } from "./types";

export const initialState: initialStateType = {
  session: {
    loginType: 'teacher'
  },
  user: {
    id: null,
    name: "",
    email: "",
    isSignedIn: false,
  },
};
