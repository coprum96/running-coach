import React from "react";

const styles = {
  paper: {
    padding: "20px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)", // Soft box shadow
    maxWidth: "600px",
    margin: "20px auto",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  text: {
    marginBottom: "10px",
  },
};

const NutritionFacts = ({ data }) => {
  if (typeof data !== "string") return null;

  const nutrition = data.split(/\n\n|\n/);

  return (
    <div style={styles.paper}>
      <h3 style={styles.heading}>Here's facts for your recipe:</h3>
      {nutrition.map((item, index) => (
        <p key={index} style={styles.text}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default NutritionFacts;
