import axios from "axios";
import Constants from "expo-constants";

const API_KEY = Constants.manifest?.extra?.GEMINI_API_KEY;

export async function analyzeHealth(data) {
  const prompt = `
    Analyze the user's health data and give:
    - risk level (low/medium/high)
    - 3 suggestions
    - hydration score
    - energy score
    - stress insights
    
    User data:
    Sleep: ${data.sleep} hours
    Water: ${data.water} L
    Steps: ${data.steps}
    Mood: ${data.mood}
    Food: ${data.food}
  `;

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY,
      {
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ]
      }
    );

    return response.data;
  } catch (err) {
    console.log("Gemini error:", err.response?.data || err.message);
    return null;
  }
}
