import { FormLabel, Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import TextInput from "../atoms/TextInput";

type Props = {
  label?: string;
  required?: boolean;
  type?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      color: theme.palette.secondary.contrastText,
      fontWeight: "bold",
      fontSize: "21px" 
    },
  })
);

const AuthForm: React.FC<Props> = (props) => {
  const { label, required, type, value, onChange } = props;
  const classes = useStyles();

  return (
    <div className="flex flex-col items-center">
      <FormLabel className={classes.label}>{label}</FormLabel>
      <TextInput name={label} required={required} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default AuthForm;
