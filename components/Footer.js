import React from "react";

const Footer = () => {
    return (
        <div
            style={{
                padding: "20px",
                position: "fixed",
                bottom: "0",
                width: "100%",
                textAlign: "center",
                backgroundColor: "#ffffff", // Adjust the background color to your preference
                color: "#121212", // Adjust the text color to your preference
                boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle shadow at the bottom
            }}
        >
            <p style={{ marginBottom: "8px", fontSize: "16px" }}>
                Your Footer Content Here
            </p>
            <p style={{ fontSize: "14px" }}>
                Powered by{" "}
                <a
                    href="https://platform.openai.com/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#61dafb" }}
                >
                    OpenAI
                </a>{" "}
                🤖
            </p>
        </div>
    );
};

export default Footer;
