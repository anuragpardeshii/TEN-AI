import express from "express";
import {
  retailResponse,
  travelResponse,
  updateRetailResponse,
  updateTravelResponse
} from "../controllers/groqController.js";

const groqrouter = express.Router();

// Travel
groqrouter.post("/generate/travel", travelResponse);
groqrouter.post("/update/travel", updateTravelResponse);

// Retail
groqrouter.post("/generate/retail", retailResponse);
groqrouter.post("/update/retail", updateRetailResponse);


export default groqrouter;
