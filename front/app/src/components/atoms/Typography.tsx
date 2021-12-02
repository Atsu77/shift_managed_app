import React, { ReactNode } from "react";
import { Typography as MTypography } from "@mui/material";

type Props = {
  cursor?: string;
  children: ReactNode;
  onClick: () => void;
};

const Typography: React.FC<Props> = (props) => {
  const { children, cursor="pointer", onClick } = props;

  return (
    <MTypography
      variant="h6"
      component="div"
      sx={{ flexGrow: 1 }}
      style={{ cursor: cursor }}
      onClick={() => onClick()}
    >
      {children} 
    </MTypography>
  );
};

export default Typography;
