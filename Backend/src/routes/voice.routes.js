import express from 'express';
import { generateResponseForDomain } from './src/utils/groqProcessor.js';

const router = express.Router();

router.post("/voice-input", async (req, res) => {
  const { domain, query } = req.body;

  if (!domain || !query) {
    return res.status(400).json({ error: "Missing domain or query" });
  }

  let systemPrompt;

  switch (domain.toLowerCase()) {
    case "travel":
      systemPrompt = travelPrompt;
      break;
    default:
      return res.status(400).json({ error: "Unsupported domain." });
  }

  try {
    const responseText = await generateResponse(query, systemPrompt);
    return res.json({ response: responseText });
  } catch (error) {
    console.error("GROQ ERROR:", error);
    return res.status(500).json({ error: "Agent failed to respond." });
  }
});

export default router;
