import express from "express";
import {
  bankingResponse,
  hospitalityResponse,
  InsuaranceResponse,
  realEstateResponse,
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

// Travel
groqrouter.post("/generate/travel", travelResponse);
groqrouter.post("/update/travel", updateTravelResponse);

// Retail
groqrouter.post("/generate/retail", retailResponse);
groqrouter.post("/update/retail", updateRetailResponse);

// insuarance
groqrouter.post("/generate/insuarance", InsuaranceResponse);
groqrouter.post("/update/insuarance", updateInsuaranceResponse);


// banking
groqrouter.post("/generate/banking", bankingResponse);
groqrouter.post("/update/banking", updatebankingResponse);


// hospitality
groqrouter.post("/generate/hospitality", hospitalityResponse);
groqrouter.post("/update/hospitality", updatehospitalityResponse);


// realEstate
groqrouter.post("/generate/realestate", realEstateResponse);
groqrouter.post("/update/realEstate", updaterealEstateResponse);


export default groqrouter;
