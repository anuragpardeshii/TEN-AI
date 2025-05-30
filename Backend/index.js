import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./src/utils/dbConnect.js";
import insightsRouter from "./src/routes/insights.routes.js";
import Contactrouter from "./src/routes/contact.routes.js";
import groqrouter from "./src/routes/groq.Route.js";
import errorHandler from "./src/middleware/errorHandler.js";
import userRouter from "./src/routes/user.route.js";
import cookieParser from "cookie-parser";
import voiceRouter from "./src/routes/voice.routes.js";
import otpRouter from "./src/otp/otp.routes.js";

const server = express();

server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
server.use(bodyParser.json());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.use("/api/insights", insightsRouter);
server.use("/api/contact", Contactrouter);
server.use("/api/groqrouter", groqrouter);
server.use("/api/user", userRouter);
server.use("/api/voice", voiceRouter);
server.use("/api/otp", otpRouter);

server.use(errorHandler);

server.get("/", (req, res) => {
  res.send("Welcome to the TEN-AI Backend");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is Listening at Port Number : ${PORT}`);
  connectDB();
});
