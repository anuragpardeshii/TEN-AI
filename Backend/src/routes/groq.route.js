import express from "express";
import {
  travelResponse,
  updateTravelResponse
} from "../controllers/groqController.js";

const groqrouter = express.Router();

groqrouter.post("/generate/travel", travelResponse);
groqrouter.post("/update/travel", updateTravelResponse);

export default groqrouter;
