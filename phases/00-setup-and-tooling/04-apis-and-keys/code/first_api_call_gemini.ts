import { GoogleGenAI } from "@google/genai";

process.loadEnvFile("../../../../.env");

async function main() {
  const ai = new GoogleGenAI({});
  const MODEL = process.env.LLM_MODEL ?? "gemini-flash-lite-latest";

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: "What is a neural network in one sentence?",
    config: { maxOutputTokens: 1024 },
  });

  console.log(response.text);
}

main();
