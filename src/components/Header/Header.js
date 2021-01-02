import React from "react";

/** Material-UI Components */
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

/** Styles */
import useStyles from './Header.styles';

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Typography variant="h3">To Do</Typography>
    </AppBar>
  );
};

export default Header;
