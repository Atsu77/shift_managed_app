import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { TextFieldProps } from "material-ui";
import React from "react";

interface Props extends TextFieldProps {
  label?: string,
  onChange?: () => void;
}

const useStyles = makeStyles({
  full: {
    border: "solid .5px", 
    height: "2em",
    padding: "6px .5rem 3px",
    borderRadius: "10px",
    marginBottom: "16px",
    fontSize: "20px"
  },
  half: {
    border: "solid .5px", 
    borderRadius: "10px",
    marginLeft: "8px",
    marginRight: "8px",
    marginBottom: "16px",
    height: "2em",
    padding: "6px .5rem 3px",
    minWidth: "130px",
    width: "calc(50% - 16px)",
    fontSize: "20px"
  },
});

const TextInput: React.FC<Props> = (props) => {
  const classes = useStyles();
  const textStyle = props.fullWidth ? classes.full : classes.half;

  return (
    <TextField
      className={textStyle}
      fullWidth={props.fullWidth}
      label={props.label}
      margin="dense"
      multiline={props.multiLine}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      InputProps={{ disableUnderline: true }}
      onChange={props.onChange}
    />
  )
};

export default TextInput;
