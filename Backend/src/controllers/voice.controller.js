// import { generateResponseForDomain } from "../utils/groqProcessor.js";
// import { domainPrompts } from "../prompts/index.js"; // Ensure the prompts are correctly exported

// export const handleVoiceInput = async (req, res) => {
//   try {
//     const { query, domain } = req.body;

//     const domainKey = domain?.toLowerCase();

//     if (!query || !domainKey || !domainPrompts[domainKey]) {
//       return res.status(400).json({ response: "Missing or invalid input." });
//     }

//     const systemPrompt = domainPrompts[domainKey];
//     const response = await generateResponseForDomain(systemPrompt, query);

//     res.json({ response });
//   } catch (error) {
//     console.error("Error handling voice input:", error.message);
//     res.status(500).json({ response: "Server error. Please try again later." });
//   }
//  };
// // import { generateResponseForDomain } from "../utils/groqProcessor.js";


// // export const handleVoiceInput = async (req, res) => {
// //   try {
// //     const { query, domain } = req.body;
// //     console.log("📩 Incoming voice query:", query);
// //     console.log("🌐 Domain:", domain);

// //     if (!query || !domain) {
// //       return res.status(400).json({ error: "Missing query or domain" });
// //     }

// //     const aiResponse = await generateResponseForDomain(query, domain);
// //     console.log("🤖 AI Response from Groq:", aiResponse);

// //     res.status(200).json({ response: aiResponse });
// //   } catch (error) {
// //     console.error("❌ Voice controller error:", error);
// //     res.status(500).json({ response: "Sorry, something went wrong." });
// //   }
// // };

//finel code 
const express = require('express');
const router = express.Router();

// Function to handle the different domains and refine queries
const generateResponseForDomain = async (query, domain) => {
  try {
    // Refine the query by removing unnecessary words
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

// Refine the query by removing unnecessary words
const refineQuery = (query) => {
  const keywords = ['I want to', 'share', 'can you', 'please', 'help with'];
  let refinedQuery = query.toLowerCase();

  keywords.forEach((word) => {
    refinedQuery = refinedQuery.replace(new RegExp(word, 'g'), '');
  });

  return refinedQuery.trim();
};

// Handle the "travel" domain
const handleTravelDomain = (query) => {
  if (query.includes('reschedule') || query.includes('flight')) {
    return "You want to reschedule your flight for next Monday. Please check with your airline for the updated flight details.";
  }
  return "Sorry, I couldn't understand the request. Could you please provide more details about rescheduling your flight?";
};

// Define other domains (retail, insurance) as needed
const handleRetailDomain = (query) => {
  // You can handle retail-related queries here
  return "Retail response logic goes here.";
};

const handleInsuranceDomain = (query) => {
  // You can handle insurance-related queries here
  return "Insurance response logic goes here.";
};

// Route to handle voice input
router.post('/voice-input', async (req, res) => {
  const { query, domain } = req.body;

  if (!query || !domain) {
    return res.status(400).json({ response: "Query and domain are required." });
  }

  const response = await generateResponseForDomain(query, domain);
  return res.json({ response });
});

module.exports = router;
