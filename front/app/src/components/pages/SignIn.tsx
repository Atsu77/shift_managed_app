import React, { useCallback, useState } from "react";
import {
  createStyles,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Theme,
} from "@material-ui/core";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import PrimaryButton from "../atoms/PrimaryButton";
import SecondaryButton from "../atoms/SecondaryButton";
import AuthForm from "../molecules/AuthForm";
import { signIn } from "../../redux/users/operations";
import { LoginType } from "../../redux/sessions/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formlabel:{
      color: theme.palette.secondary.contrastText,
      fontSize: "21px",
      fontWeight: "bold"
    },
    radio: {
      color: theme.palette.secondary.contrastText,
      fontSize: "20px",
    },
  })
);

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>(""),
    [password, setPassword] = useState<string>(""),
    [loginType, setLoginType] = useState<LoginType>("teacher");


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

  const inputLoginType = useCallback(
    (e) => {
      setLoginType(e.target.value)
    },
    [setLoginType],
  )

  return (
    <div className="c-section-container text-center">
      <div className="module-spacer--medium" />
      <h2 className="u-text-center u-text__headline font-bold">
        Connection Shift
      </h2>
      <h3 className="u-text-center font-bold text-white">
        - 個別指導専用専用シフト管理アプリ -
      </h3>
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
      <div className="module-spacer--extra-small" />
      <FormControl component="fieldset">
        <FormLabel focused={false} component="legend" className={classes.formlabel}>ユーザー選択</FormLabel>
        <RadioGroup row aria-label="login_type" name="row-radio-buttons-group" value={loginType} onChange={inputLoginType}>
          <FormControlLabel value="teacher" control={<Radio />} label="講師" className={classes.radio}/>
          <FormControlLabel value="student" control={<Radio />} label="生徒" className={classes.radio}/>
        </RadioGroup>
      </FormControl>
      <div className="module-spacer--medium" />
      <PrimaryButton
        children={"ログイン"}
        onClick={() => dispatch(signIn({
          email: email, 
          password: password, 
          loginType: loginType}))}
      />
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
