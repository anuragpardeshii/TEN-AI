import express from 'express';
const router = express.Router();

// Main voice input handler
export const handleVoiceInput = async (req, res) => {
  try {
    const { query, domain } = req.body;
    console.log("📩 Incoming voice query:", query);
    console.log("🌐 Domain:", domain);

    if (!query || !domain) {
      return res.status(400).json({ error: "Missing query or domain" });
    }

    const aiResponse = await generateResponseForDomain(query, domain);
    console.log("🤖 AI Response from Groq:", aiResponse);

    res.status(200).json({ response: aiResponse });
  } catch (error) {
    console.error("❌ Voice controller error:", error);
    res.status(500).json({ response: "Sorry, something went wrong." });
  }
};

// Domain logic
const generateResponseForDomain = async (query, domain) => {
  try {
    const refinedQuery = refineQuery(query);
    let response = '';

    switch (domain) {
      case 'travel':
        response = handleTravelDomain(refinedQuery);
        break;
      case 'retail':
        response = handleRetailDomain(refinedQuery);
        break;
      case 'insurance':
        response = handleInsuranceDomain(refinedQuery);
        break;
      default:
        response = "Sorry, I couldn't process that. Could you try again?";
    }

    return response;
  } catch (error) {
    console.error('Error in generateResponseForDomain:', error);
    return "Sorry, something went wrong while processing your request.";
  }
};

// Helpers
const refineQuery = (query) => {
  const keywords = ['I want to', 'share', 'can you', 'please', 'help with'];
  let refinedQuery = query.toLowerCase();

  keywords.forEach((word) => {
    refinedQuery = refinedQuery.replace(new RegExp(word, 'g'), '');
  });

  return refinedQuery.trim();
};

const handleTravelDomain = (query) => {
  if (query.includes('reschedule') || query.includes('flight')) {
    return "You want to reschedule your flight for next Monday. Please check with your airline for the updated flight details.";
  }
  return "Sorry, I couldn't understand the request. Could you please provide more details about rescheduling your flight?";
};

const handleRetailDomain = (query) => {
  return "Retail response logic goes here.";
};

const handleInsuranceDomain = (query) => {
  return "Insurance response logic goes here.";
};

// Attach route
router.post('/voice-input', handleVoiceInput);

export default router;
