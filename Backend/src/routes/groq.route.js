import express from "express";
import {
  bankingResponse,
  hospitalityResponse,
  InsuaranceResponse,
  realEstate,
  retailResponse,
  travelResponse,
  updatebankingResponse,
  updatehospitalityResponse,
  updateInsuaranceResponse,
  updaterealEstateResponse,
  updateRetailResponse,
  updateTravelResponse
} from "../controllers/groqController.js";

const groqrouter = express.Router();

// Travel Routes
groqrouter.post("/generate/travel", travelResponse);
groqrouter.post("/update/travel", updateTravelResponse);

// Retail Routes
groqrouter.post("/generate/retail", retailResponse);
groqrouter.post("/update/retail", updateRetailResponse);

// Insurance Routes
groqrouter.post("/generate/insurance", InsuaranceResponse);
groqrouter.post("/update/insurance", updateInsuaranceResponse);

// Banking Routes
groqrouter.post("/generate/banking", bankingResponse);
groqrouter.post("/update/banking", updatebankingResponse);

// Hospitality Routes
groqrouter.post("/generate/hospitality", hospitalityResponse);
groqrouter.post("/update/hospitality", updatehospitalityResponse);

// Real Estate Routes
groqrouter.post("/generate/realestate", realEstate);
groqrouter.post("/update/realestate", updaterealEstateResponse);

export default groqrouter;
