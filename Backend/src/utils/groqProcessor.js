import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const generateResponse = async (message, systemPrompt) => {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      model: "llama3-70b-8192",  // ✅ working model
    });

    return completion.choices[0].message.content;
  } catch (err) {
    console.error("GROQ ERROR:", err);
    return "Sorry, I couldn't process your request.";
  }
};
