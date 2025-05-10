import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import voiceRoutes from "./src/routes/voice.routes.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/voice", voiceRoutes);

// Server setup
app.listen(PORT, () => {
  console.log(`Server is Listening at Port Number: ${PORT}`);
});
