import { GoogleGenAI } from "@google/genai";
export const geminiClient = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GENAI_KEY,
});
