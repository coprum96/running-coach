import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#121212",
    position: "fixed",
    top: 50,
    width: "100%",
    padding: "10px 0",
    textAlign: "center",
  };

  const titleStyle = {
    flexGrow: 1,
    fontFamily: "Nike", // Use the appropriate font family
    fontSize: "25px",
    color: "#ffffff", // White color for text
  };

  return (
    <header style={headerStyle}>
      <div style={titleStyle}>
        <span role="img" aria-label="Running emoji">
          🏃
        </span>{" "}
        Hey there! I'm your Running Coach GPT
        <span role="img" aria-label="Running emoji">
          🏃
        </span>
      </div>
    </header>
  );
};

export default Header;
