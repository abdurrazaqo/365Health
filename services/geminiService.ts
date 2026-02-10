
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userMessage: string) => {
  if (!API_KEY) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are the 365Health Systems AI Concierge. 
        Your goal is to explain how 365Health can revolutionize healthcare infrastructure. 
        Focus on:
        1. 365Pharm (Pharmacy Management)
        2. 365Insight (Analytics)
        3. 365Connect (Patient Engagement)
        
        Keep responses professional, concise, and focused on operational efficiency, data security, and clinical outcomes. 
        Use professional healthcare terminology but stay accessible.`,
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 500,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again or contact our support team.";
  }
};
