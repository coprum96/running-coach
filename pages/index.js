import React, { useState } from "react";
import NutritionFacts from "../components/NutritionFacts";
import Header from "../components/Header";

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
    <Header/>
<div style={{ minHeight: "100vh", background: "#121212", color: "#333", fontFamily: "'Nike', sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ padding: "40px", borderRadius: "15px", boxShadow: "0 10px 8px rgba(0, 0, 0, 0.1)", width: "300px", background: "#fff" }}>
          <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>
              Age:
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={{ padding: "12px", borderRadius: "4px", border: "1px solid #ccc", width: "93%", fontSize: "14px" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>
                How often do you want to run per week?:
                <input
                  type="number"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  style={{ padding: "12px", borderRadius: "4px", border: "1px solid #ccc", width: "93%", fontSize: "14px" }}
                />
              </label>
            </div>
            <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>
                How long do you usually run for?:
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  style={{ padding: "12px", borderRadius: "4px", border: "1px solid #ccc", width: "93%", fontSize: "14px" }}
                />
              </label>
            </div>
            <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>
                What is your running target?:
                <input
                  type="text"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  style={{ padding: "12px", borderRadius: "4px", border: "1px solid #ccc", width: "93%", fontSize: "14px" }}
                />
              </label>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <textarea
                value={additionalWishes}
                onChange={(e) => setAdditionalWishes(e.target.value)}
                placeholder="Any additional wishes or information?"
                type="text"
                style={{
                  width: "93%",
                  minHeight: "30px",
                  padding: "10px",
                  marginTop: "10px",
                }}
              />
            </div>
            <div>
            <button type="submit" style={{ width: "100%", marginTop: "10px", background: "#0084ff", color: "#fff", padding: "15px", borderRadius: "4px", border: "none", cursor: "pointer", fontSize: "16px" }}>
              Generate
            </button>
            <button type="button" onClick={handleClear} style={{ marginTop: "10px", background: "#d32f2f", color: "#fff", padding: "10px", borderRadius: "4px", border: "none", cursor: "pointer" }}>
              Clear
            </button>
            </div>
          </form>
        </div>

        <div style={{ paddingTop: "50px", textAlign: "center" }}>
  {loading && <div style={{ fontSize: "24px", color: "#3498db", fontWeight: "bold" }}>Loading...</div>}
  {error && (
    <div style={{ color: "red", fontSize: "18px" }}>
      An error occurred: {error === "Unauthorized: Please provide a valid API key."
        ? "Please provide a valid API key."
        : "Unable to get coaching info. Please try again later."}
    </div>
          )}
          {nutrition && <NutritionFacts data={nutrition} />}
        </div>
      </div>
    </>
  );
}

export default HomePage;
