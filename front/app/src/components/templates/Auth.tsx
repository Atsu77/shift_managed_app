import { push } from "connected-react-router";
import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialStateType } from "../../redux/store/types";
import { getSignedIn } from "../../redux/teachers/selectors";

type Props = {
  children: ReactElement;
};

const Auth: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch()
  const selector = useSelector<initialStateType, initialStateType>(
    (state) => state
  );

  const isSignedIn = getSignedIn(selector);

  useEffect(() => {
    if(!isSignedIn) {
      dispatch(push("/"));
    }
  })

  if (!isSignedIn) {
    return <></>;
  } else {
    return children;
  }
};

export default Auth;
