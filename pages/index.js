import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../components/Header";
import NutritionFacts from "../components/NutritionFacts";
import Footer from "../components/Footer";
import Main from "../components/Main";
import theme from "../utils/theme";

function HomePage() {
  const [recipe, setRecipe] = useState("");
  const [nutrition, setNutrition] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/openai/generateinfo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ recipe }),
        }
      );

      if (response.ok) {
        const nutrition = await response.json();
        if (nutrition.data) {
          console.log(nutrition);
          setNutrition(nutrition.data);
        } else {
          setError("Unable to get coaching info");
        }
      } else if (response.status === 401) {
        setError("Unauthorized: Please provide a valid API key.");
      } else {
        const errorMessage = await response.text();
        setError(`An error occurred: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setError(`An error occurred: ${error.message || error}`);
    } finally {
      setLoading(false);
    }
  }

  function handleClear(event) {
    event.preventDefault();
    setRecipe("");
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Container
        maxWidth="md"
        style={{ marginTop: "40px", minHeight: "100vh", paddingBottom: "100px" }}
      >

        <Paper elevation={24} style={{ padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextareaAutosize
                  value={recipe}
                  onChange={(e) => setRecipe(e.target.value)}
                  placeholder="Enter information about your running experience "
                  style={{
                    width: "98%",
                    maxWidth: "850px",
                    minHeight: "200px",
                    padding: "10px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<Send />}
                >
                  Submit
                </Button>
                <br />
                <Button
                  style={{ marginTop: "10px" }}
                  variant="contained"
                  color="secondary"
                  onClick={handleClear}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <div style={{ paddingTop: "40px", textAlign: "center" }}>
          {loading && <CircularProgress />}
          {error && (
            <Typography color="error">
              An error occurred: {error === "Unauthorized: Please provide a valid API key."
                ? "Please provide a valid API key."
                : "Unable to get coaching info. Please try again later."}
            </Typography>
          )}
          {nutrition && <NutritionFacts data={nutrition} />}
        </div>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default HomePage;