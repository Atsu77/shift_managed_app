import React, { useCallback, useState, memo } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Typography from "../atoms/Typography";
import { createStyles, makeStyles } from "@material-ui/styles";
import { AppBar, Theme } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { getSignedIn } from "../../redux/users/selectors";
import { initialStateType } from "../../redux/store/types";
import { signOut } from "../../redux/users/operations";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.secondary.contrastText,
    },
    radio: {
      color: theme.palette.secondary.contrastText,
      fontSize: "20px",
    },
  })
);

const Header: React.FC = memo(() => {
  console.log('header')
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector<initialStateType, initialStateType>(
    (state) => state
    );
    const isSignedIn = getSignedIn(selector);
    console.log(isSignedIn)

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = useCallback((e) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const onClickSignOut = useCallback(() => {
    dispatch(signOut());
    setAnchorEl(null);
    dispatch(push("/"));
  }, [dispatch]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography onClick={() => dispatch(push("/"))}>
            Connection Shift
          </Typography>
          {isSignedIn && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    onClickSignOut();
                  }}
                >
                  ログアウト
                </MenuItem>
                <MenuItem onClick={handleClose}>プロフィール</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default Header;
