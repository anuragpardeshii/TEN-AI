import express from "express";
import {
  addInsight,
  deleteInsight,
  fetchInsights,
  updateInsight
} from "./insights.controller.js";

const insightsRouter = express.Router();

insightsRouter.post("/create", addInsight);
insightsRouter.get("/getAll", fetchInsights);
insightsRouter.put("/update/:id", updateInsight);
insightsRouter.delete("/delete/:id", deleteInsight);

export default insightsRouter;
