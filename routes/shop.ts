import express from "express";

import { getShop } from "../controllers/shop";

export const shopRoutes = express.Router();

shopRoutes.get("/", getShop);
