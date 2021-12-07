import React from "react";
import { useDispatch } from "react-redux";
import SecondaryButton from "../atoms/SecondaryButton";
import { selectLogin } from "../../redux/sessions/operations";

const SelectLoginType = () => {
  const dispatch = useDispatch();

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
      <img src={`${process.env.PUBLIC_URL}/image/select_user_type/select_user_type.png`} alt="ユーザー選択画像" 
      style={{ height: 450, width: 700, margin: "0 auto"}}/>
      <div className="module-spacer--medium" />
      <h2 className="u-text-center font-bold text-white">
        該当するユーザー項目を選んでください
      </h2> 
      <div className="module-spacer--extra-small" />
      <div className="flex justify-between w-1/2 m-auto">
        <SecondaryButton onClick={() => dispatch(selectLogin('teacher'))}>講師</SecondaryButton>
        <SecondaryButton onClick={() => dispatch(selectLogin('student'))}>生徒</SecondaryButton>
      </div>
    </div>
  );
};

export default SelectLoginType;
