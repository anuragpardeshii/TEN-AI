import express from "express";
import { submitContactForm } from "../controllers/contact.controller.js";

const Contactrouter = express.Router();
Contactrouter.post("/mail", submitContactForm);

export default Contactrouter;
