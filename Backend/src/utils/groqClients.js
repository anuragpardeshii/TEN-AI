import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

if (!process.env.GROQ_API_KEY) {
  console.error("GROQ_API_KEY is missing! Please check your .env file.");
  process.exit(1);
}

export const generateResponse = async (userPrompt, systemPrompt) => {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      model: "llama3-70b-8192",
      temperature: 1,
      max_tokens: 8192,
      top_p: 1,
      stream: false,
    });

    return response.choices[0]?.message?.content || "Sorry, I couldn't understand.";
  } catch (err) {
    console.error("Error while generating response:", err);
    throw new Error("Failed to generate answer");
  }
};
