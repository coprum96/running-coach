import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "Nike",
    fontSize: "14px",
    color: "#121212",

    textTransform: "uppercase",
  },
}));

function Donat() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          This is a personalized powered project. If you like it, consider supporting us!
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Donat;
