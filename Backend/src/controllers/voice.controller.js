import { generateResponseForDomain } from '../utils/groqProcessor.js'; // Assuming groqProcessor has the response generation logic
import { domainPrompts } from '../prompts'; // Assuming your prompts are properly exported

export const handleVoiceInput = async (req, res) => {
  try {
    const { query, domain } = req.body;

    const domainKey = domain?.toLowerCase();

    if (!query || !domainKey || !domainPrompts[domainKey]) {
      return res.status(400).json({ response: "Missing or invalid input." });
    }

    const systemPrompt = domainPrompts[domainKey];
    const response = await generateResponseForDomain(systemPrompt, query);  // Pass systemPrompt and query properly

    res.json({ response });
  } catch (error) {
    console.error("Error handling voice input:", error.message);
    res.status(500).json({ response: "Server error. Please try again later." });
  }
};
