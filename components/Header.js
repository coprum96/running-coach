import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#121212",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "Nike", // Use the appropriate font family
    fontSize: "32px",
    color: "#ffffff", // White color for text
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <span role="img" aria-label="Running emoji">
            🏃
          </span>{" "}
          Hey there! I'm your Running Coach GPT
          <span role="img" aria-label="Running emoji">
            🏃
          </span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
