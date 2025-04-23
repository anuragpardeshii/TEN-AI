import express from "express";
import {
  generateResponse,
  updateResponse
} from "../controllers/groqController.js";

const groqrouter = express.Router();

groqrouter.post("/generate", generateResponse);
groqrouter.post("/update", updateResponse);

export default groqrouter;
