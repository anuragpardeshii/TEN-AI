import express from "express";
import {
  bankingResponse,
  hospitalityResponse,
  insuranceResponse,
  realEstateResponse,
  retailResponse,
  travelResponse,
  updateBankingResponse,
  updateHospitalityResponse,
  updateInsuranceResponse,
  updateRealEstateResponse,
  updateRetailResponse,
  updateTravelResponse
} from "../controllers/groqController.js";
import isAuthenticated from "../middleware/jwt.js";

const groqrouter = express.Router();

// Travel Routes
groqrouter.post("/generate/travel",isAuthenticated, travelResponse);
groqrouter.post("/update/travel",isAuthenticated, updateTravelResponse);

// Retail Routes
groqrouter.post("/generate/retail",isAuthenticated, retailResponse);
groqrouter.post("/update/retail",isAuthenticated, updateRetailResponse);

// Insurance Routes
groqrouter.post("/generate/insurance",isAuthenticated, insuranceResponse);
groqrouter.post("/update/insurance",isAuthenticated, updateInsuranceResponse);

// Banking Routes
groqrouter.post("/generate/banking",isAuthenticated, bankingResponse);
groqrouter.post("/update/banking",isAuthenticated, updateBankingResponse);

// Hospitality Routes
groqrouter.post("/generate/hospitality",isAuthenticated, hospitalityResponse);
groqrouter.post("/update/hospitality",isAuthenticated, updateHospitalityResponse);

// Real Estate Routes
groqrouter.post("/generate/realestate",isAuthenticated, realEstateResponse);
groqrouter.post("/update/realestate",isAuthenticated, updateRealEstateResponse);

export default groqrouter;
