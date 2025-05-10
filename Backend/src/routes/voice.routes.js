import express from "express";
import { generateResponseForDomain } from "./src/utils/groqProcessor.js";

const router = express.Router();

router.post("/voice-input", async (req, res) => {
  const { domain, query } = req.body;

  try {
    // Check which domain the query belongs to and process it accordingly
    const response = await generateResponseForDomain(domain, query);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: "Error processing the request" });
  }
});

export default router;
