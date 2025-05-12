// src/prompts/index.js


import {travelPrompt} from "./travelPrompt.js";
import {insurancePrompt} from "./insurancePrompt.js";
import {retailPrompt} from "./retailPrompt.js";

export const domainPrompts = {

  travel: travelPrompt,
  insurance: insurancePrompt,
  retail: retailPrompt,

};
