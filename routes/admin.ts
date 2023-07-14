import express from "express";

import { getAddProduct, postAddProduct } from "../controllers/admin";
import { Product } from "../models/product";

export const adminRouter = express.Router();

adminRouter.get("/add-product", getAddProduct);
adminRouter.post("/add-product", postAddProduct);
