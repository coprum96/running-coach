import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextareaAutosize,
  Typography,
  TextField,
} from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../components/Header";
import NutritionFacts from "../components/NutritionFacts";
import Footer from "../components/Footer";
import Main from "../components/Main";
import theme from "../utils/theme";
import FAQs from "../components/FAQ";
import Donat from "../components/Donat";

function HomePage() {
  const [age, setAge] = useState("");
  const [frequency, setFrequency] = useState("");
  const [duration, setDuration] = useState("");
  const [target, setTarget] = useState("");
  const [additionalWishes, setAdditionalWishes] = useState("");
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
          body: JSON.stringify({
            age,
            frequency,
            duration,
            target,
            additionalWishes,
          }),
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
    setAge("");
    setFrequency("");
    setDuration("");
    setTarget("");
    setAdditionalWishes("");
  }

  return (
    <ThemeProvider theme={theme}>
      <Donat />
      <Header />
      <Main />
      <Container
        maxWidth="md"
        style={{ marginTop: "40px", minHeight: "100vh", paddingBottom: "100px" }}
      >
        <Paper elevation={14} style={{ padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="How often do you want to run per week?"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="How long do you usually run for?"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="What is your running target?"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  value={additionalWishes}
                  onChange={(e) => setAdditionalWishes(e.target.value)}
                  placeholder="Any additional wishes or information?"
                  style={{
                    width: "98%",
                    maxWidth: "850px",
                    minHeight: "80px",
                    padding: "10px",
                    marginTop: "10px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<Send />}
                  style={{ width: "200px", marginTop: "10px" }}
                >
                  Generate
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClear}
                  style={{ marginTop: "10px" }}
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
      <FAQs />
      
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default HomePage;
