import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
// Note: In a real production app, you might want to handle the missing key more gracefully in the UI
const ai = new GoogleGenAI({ apiKey });

export const generateEcliptixResponse = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please check your environment configuration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are Ecliptix, a sophisticated, helpful, and futuristic AI assistant. Your tone is professional, concise, and intelligent. You represent a company at the forefront of AI technology.",
      }
    });

    return response.text || "I processed that, but couldn't generate a text response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I encountered an error connecting to the Ecliptix neural network. Please try again.";
  }
};