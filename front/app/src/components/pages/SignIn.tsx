import { push } from "connected-react-router";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import PrimaryButton from "../atoms/PrimaryButton";
import SecondaryButton from "../atoms/SecondaryButton";
import AuthForm from "../molecules/AuthForm";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>(""),
    [password, setPassword] = useState<string>("");

  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  return (
    <div className="c-section-container text-center">
      <div className="module-spacer--medium" />
      <h2 className="u-text-center u-text__headline font-bold">Connection Shift</h2>
      <h3 className="u-text-center font-bold text-white">- 個別指導専用専用シフト管理アプリ -</h3>
      <div className="module-spacer--large" />
      <AuthForm
        label={"メールアドレス"}
        required={true}
        type={"email"}
        onChange={inputEmail}
      />
      <AuthForm
        label={"パスワード"}
        required={true}
        type={"password"}
        onChange={inputPassword}
      />
      <div className="module-spacer--medium" />
      <PrimaryButton
        children={"ログイン"}
        onClick={() => console.log('push')} />
      <div className="module-spacer--medium" />
      <div className="flex justify-between w-1/2 m-auto">
        <SecondaryButton
          children={"ゲストログイン"}
          onClick={() => console.log("ゲストログインボタンが押された")}
        />
        <SecondaryButton
          children={"新規登録"}
          onClick={() => dispatch(push("/selectlogin"))}
        />
      </div>
    </div>
  );
};

export default SignIn;
