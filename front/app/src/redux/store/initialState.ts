import { initialStateType } from "./types";

export const initialState: initialStateType = {
  user : {
    id: null,
    name: "",
    email: "",
    isSignedIn: false,
    userType: null
  },
};
