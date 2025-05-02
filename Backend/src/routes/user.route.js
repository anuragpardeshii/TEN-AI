import express from "express";
import { login, logoutUser, register } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logoutUser);

export default userRouter;
