import express from "express";

import { getAddProduct, postAddProduct } from "../controllers/admin";

const products: object[] = [];

export const adminRouter = express.Router();
export const prods = products;

adminRouter.get("/add-product", getAddProduct);
adminRouter.post("/add-product", postAddProduct);
export { products };
