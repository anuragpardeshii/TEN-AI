import {travelPrompt} from "../prompts/travelPrompt.js";
import {insurancePrompt} from "../prompts/insurancePrompt.js";
import {retailPrompt} from "../prompts/retailPrompt.js";

import {generateResponse} from "./groqProcessor.js";

export const generateResponseForDomain = async (domain, query) => {
  let prompt;

  switch (domain) {
    case "travel":
      prompt = travelPrompt;
      break;
    case "insurance":
      prompt = insurancePrompt;
      break;
    case "retail":
      prompt = retailPrompt;
      break;
    case "system":
      prompt = systemPrompt;
      break;
    case "update":
      prompt = updatePrompt;
      break;
    default:
      throw new Error("Invalid domain");
  }

  return await generateResponse(prompt, query);
};
