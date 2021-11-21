import { Button, Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      fontSize: "20px",
      height: "52px",
      width: "372px",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
      },
    },
  })
);

const PrimaryButton: React.FC<Props> = (props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => onClick()}
      disabled={disabled || loading}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
