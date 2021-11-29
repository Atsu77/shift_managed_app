import { push } from "connected-react-router";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginType } from "../../redux/sessions/selectors";
import { initialStateType } from "../../redux/store/types";
import { signUp } from "../../redux/users/operations";
import PrimaryButton from "../atoms/PrimaryButton";
import SecondaryButton from "../atoms/SecondaryButton";
import AuthForm from "../molecules/AuthForm";

const SignUp = () => {
  const dispatch = useDispatch();
  const selector = useSelector<initialStateType, initialStateType>((state) => state);
  const loginType = getLoginType(selector)
  const [name, setName] = useState<string>(""),
    [email, setEmail] = useState<string>(""),
    [password, setPassword] = useState<string>(""),
    [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const inputName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [setName]
  );

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

  const inputPasswordConfirmation = useCallback(
    (e) => {
      setPasswordConfirmation(e.target.value);
    },
    [setPasswordConfirmation]
  );

  return (
    <div className="c-section-container text-center">
      <div className="module-spacer--medium" />
      <h2 className="u-text-center u-text__headline font-bold">新規登録</h2>
      <div className="module-spacer--medium" />
        <AuthForm
          label={loginType === 'student' ? "生徒名" : "講師名"}
          required={true}
          type={"text"}
          onChange={inputName}
        />
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
      <AuthForm
        label={"パスワード確認"}
        required={true}
        type={"password"}
        onChange={inputPasswordConfirmation}
      />
      <div className="module-spacer--medium" />
      <PrimaryButton
        children={"新規登録"}
        onClick={() =>
          dispatch(
            signUp({
              name: name,
              email: email,
              password: password,
              passwordConfirmation: passwordConfirmation,
            })
            )
          }
      />
      <div className="module-spacer--medium" />
      <div className="flex justify-between w-1/2 m-auto">
        <SecondaryButton
          children={"ゲストログイン"}
          onClick={() => console.log("ゲストログインボタンが押された")}
        />
        <SecondaryButton
          children={"ログインに戻る"}
          onClick={() => dispatch(push("/signin"))}
        />
      </div>
    </div>
  );
};

export default SignUp;
