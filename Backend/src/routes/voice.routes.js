import express from "express";
import { handleVoiceInput } from "../controllers/voice.controller.js";

const router = express.Router();

router.post("/voice-input", handleVoiceInput);

export default router;
