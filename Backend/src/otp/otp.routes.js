import express from "express";
import isAuthenticated from "../middleware/jwt.js";
import {
  resetPassword,
  sendOtp,
  verifyOtp
} from "../controllers/user.controller.js";

const otpRouter = express.Router();

otpRouter.post("/send", sendOtp);
otpRouter.post("/verify", isAuthenticated, verifyOtp);
otpRouter.post("/reset-password", isAuthenticated, resetPassword);

export default otpRouter;
