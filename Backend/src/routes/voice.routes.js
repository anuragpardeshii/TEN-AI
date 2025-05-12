// // src/routes/voiceRoutes.js
// import express from "express";
// import { handleVoiceInput } from "../controllers/voice.controller.js";

// const router = express.Router();

// router.post("/voice-input", handleVoiceInput); // Uses the controller to handle the post request

// export default router;
// routes/voice.route.js
import express from "express";
import { handleVoiceInput } from "../controllers/voice.controller.js";
const router = express.Router();

router.post("/voice-input", handleVoiceInput);

export default router;
