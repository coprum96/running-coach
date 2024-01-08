import React from "react";
import { Typography, Paper, makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(18),
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0", // Light gray background color
  },
  message: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: "8px",
    background: "#fff", // White background for messages
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft box shadow
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
      <div className={classes.message}>
        <Typography paragraph>
          The Running Coach GPT is a digital running assistant powered by
          ChatGPT. It provides personalized training plans, advice on improving
          running speed, suggestions for running routes, and engages in
          conversational interactions with users.
        </Typography>
      </div>
      <div className={classes.button}>
        <Typography>
          Want to start your personalized training plan? Let's go!
        </Typography>
        <ArrowForwardIcon className={classes.icon} />
      </div>
    </Paper>
  );
}

export default Main;
