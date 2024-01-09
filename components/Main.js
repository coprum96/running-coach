import React from "react";

const styles = {
  root: {
    padding: "16px",
    marginTop: "72px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0", // Light gray background color
  },
  message: {
    marginBottom: "16px",
    padding: "16px",
    borderRadius: "8px",
    background: "#fff", // White background for messages
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft box shadow
  },
  button: {
    marginTop: "16px",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginLeft: "8px",
  },
};

function Main() {
  return (
    <div style={styles.root}>
      <div style={styles.message}>
        <p>
          The Running Coach GPT is a digital running assistant powered by
          ChatGPT. It provides personalized training plans, advice on improving
          running speed, suggestions for running routes, and engages in
          conversational interactions with users.
        </p>
      </div>
      <div style={styles.button}>
        <p>Want to start your personalized training plan? Let's go!</p>
        <span style={styles.icon}>➡️</span>
      </div>
    </div>
  );
}

export default Main;
