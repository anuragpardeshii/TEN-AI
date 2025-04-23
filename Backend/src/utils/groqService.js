import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generateResponse = async (userPrompt, systemPrompt, updatePrompt = "") => {

  try {
    const stream = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      model: "llama3-70b-8192",
      temperature: 1,
      max_tokens: 8192,
      top_p: 1,
      stream: true,
      stop: null
    });

    let accumulatedContent = "";
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) accumulatedContent += content;
    }

    return accumulatedContent;
  } catch (err) {
    console.error("Error:", err);
    return new Error("Failed to generate answer");
}
};

export const updateResponse = async (userPrompt, previousContent, systemPrompt) => {

  try {
    const stream = await groq.chat.completions.create({
      messages: [
        { role: "assistant", content: previousContent ||  systemPrompt}, // Get prev chat here
        { role: "user", content: userPrompt }
      ],
      model: "llama3-70b-8192",
      temperature: 1,
      max_tokens: 8000,
      top_p: 1,
      stream: true,
      stop: null
    });

    let accumulatedContent = "";
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) accumulatedContent += content;
    }

    return accumulatedContent;
  } catch (err) {
    console.error("Error:", err);
    return new Error("Failed to generate answer");
}
};
