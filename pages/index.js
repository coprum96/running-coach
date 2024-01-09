import React, { useState } from "react";
import Header from "../components/Header";
import NutritionFacts from "../components/NutritionFacts";
import Footer from "../components/Footer";
import Main from "../components/Main";
import FAQs from "../components/FAQ";
import Donat from "../components/Donat"; // Corrected import

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
    <>
      <Donat />
      <Header />
      <Main />
<div style={{ marginTop: "40px", minHeight: "100vh", paddingBottom: "100px" }}>
        <div style={{ padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label>
                Age:
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label>
                How often do you want to run per week?:
                <input
                  type="text"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                />
              </label>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label>
                How long do you usually run for?:
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </label>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label>
                What is your running target?:
                <input
                  type="text"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                />
              </label>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <textarea
                value={additionalWishes}
                onChange={(e) => setAdditionalWishes(e.target.value)}
                placeholder="Any additional wishes or information?"
                style={{
                  width: "100%",
                  minHeight: "80px",
                  padding: "10px",
                  marginTop: "10px",
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                style={{ width: "200px", marginTop: "10px" }}
              >
                Generate
              </button>
              <button
                type="button"
                onClick={handleClear}
                style={{ marginTop: "10px" }}
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        <div style={{ paddingTop: "40px", textAlign: "center" }}>
          {loading && <div>Loading...</div>}
          {error && (
            <div style={{ color: "red" }}>
              An error occurred: {error === "Unauthorized: Please provide a valid API key."
                ? "Please provide a valid API key."
                : "Unable to get coaching info. Please try again later."}
            </div>
          )}
          {nutrition && <NutritionFacts data={nutrition} />}
        </div>
      </div>
      <FAQs />
      <Footer />
    </>
  );
}

export default HomePage;
