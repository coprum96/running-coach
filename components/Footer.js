import React from "react";
import { Paper, Typography } from "@material-ui/core";

const Footer = () => {
    return (
        <Paper
            elevation={24}
            style={{
                padding: "20px",
                position: "fixed",
                bottom: "0",
                width: "100%",
                textAlign: "center",
                backgroundColor: "#282c34", // Adjust the background color to your preference
                color: "#61dafb", // Adjust the text color to your preference
            }}
        >
            <Typography variant="body1" style={{ marginBottom: "8px" }}>
                Your Footer Content Here
            </Typography>
            <Typography variant="body2">
                Powered by
                <a
                    href="https://platform.openai.com/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#61dafb", marginLeft: "4px" }}
                >
                    OpenAI
                </a>{" "}
                🤖
            </Typography>
        </Paper>
    );
};

export default Footer;
