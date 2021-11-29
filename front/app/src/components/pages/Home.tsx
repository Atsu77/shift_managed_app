import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";
import PrimaryButton from "../atoms/PrimaryButton";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="c-section-container text-center">
      <div className="module-spacer--large" />
      <div className="module-spacer--medium" />
      <h2 className="u-text-center u-text__headline font-bold">
        Connection Shift
      </h2>
      <h3 className="u-text-center font-bold text-white">
        - 個別指導専用専用シフト管理アプリ -
      </h3>
      <div className="module-spacer--large" />
      <PrimaryButton onClick={() => dispatch(push("/selectlogin"))}>
        始める
      </PrimaryButton>
      <div className="module-spacer--medium"></div>
      <PrimaryButton onClick={() => dispatch(push("/signin"))}>
        ログイン
      </PrimaryButton>
    </div>
  );
};

export default Home;
