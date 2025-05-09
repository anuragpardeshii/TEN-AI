// testGroq.js
import { generateResponse } from './src/utils/groqProcessor.js';

const testGroq = async () => {
  const response = await generateResponse("Can you help me reschedule my flight?");
  console.log("Groq Reply:", response);
};

testGroq();
