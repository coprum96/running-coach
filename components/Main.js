import React from "react";
import { Typography, Paper, makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography paragraph>
      The Running Coach GPT is a digital running assistant powered by ChatGPT. It provides personalized training plans, advice on improving running speed, suggestions for running routes, and engages in conversational interactions with users. The tool, designed to be user-friendly, incorporates motivational features to support users in maintaining enthusiasm and continuity in their running journey.
      </Typography>
    
        <ArrowForwardIcon className={classes.icon} />
    </Paper>
  );
}

export default Main;
