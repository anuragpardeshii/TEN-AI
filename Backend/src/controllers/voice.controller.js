import { travelPrompt } from "../prompts/travelPrompt.js";
import { insurancePrompt } from "../prompts/insurancePrompt.js";
import { retailPrompt } from "../prompts/retailPrompt.js";
import { bankingPrompt } from "../prompts/bankingPrompt.js";
import { realEstatePrompt } from "../prompts/realEstatePrompt.js";
import { hospitalityPrompt } from "../prompts/hospitalityPrompt.js";


import { generateResponse } from "../utils/groqProcessor.js";


const domainPrompts = {
  travel: travelPrompt,
  insurance: insurancePrompt,
  retail: retailPrompt,
  banking: bankingPrompt,
  realEstate: realEstatePrompt,
  hospitality: hospitalityPrompt
 
};

export const handleVoiceInput = async (req, res) => {
  try {
    const { query, domain } = req.body;

    const domainKey = domain?.toLowerCase(); 

    if (!query || !domainKey || !domainPrompts[domainKey]) {
      return res.status(400).json({ response: "Missing or invalid input." });
    }

    const systemPrompt = domainPrompts[domainKey];
    const response = await generateResponse(query, systemPrompt);

    res.json({ response });
  } catch (error) {
    console.error("Error handling voice input:", error.message);
    res.status(500).json({ response: "Server error. Please try again later." });
  }
};
