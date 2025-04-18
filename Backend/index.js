import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./src/utils/dbConnect.js";
import insightsRouter from "./src/routes/insights.routes.js";


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
