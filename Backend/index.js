import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/utils/dbConnect.js";
import bodyParser from "body-parser";
import insightsRouter from "./src/features/Insights/insights.routes.js";
import cors from "cors";

dotenv.config();

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// server.use("/uploads", express.static(path.join("uploads")));

server.use("/api/insights", insightsRouter);

server.get("/", (req, res) => {
  res.send("Welcome to the TEN-AI Backend");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is Listening at Port Number : ${PORT}`);
  connectDB();
});
