import express from "express";
import {
  createCardController,
  getCardController,
  getCardsController,
} from "../controllers/cardControllers.js";

//router object
const router = express.Router();

//routings

// Create Cards || Method POST
router.post("/create", createCardController);

// Get all cards || Method GET
router.get("/get-cards", getCardsController);

// Get card by id || Method GET
router.get("/get-card/:title", getCardController);

export default router;
