import express from "express";
import path from "path";

import rootDir from "../utils/path";

const products: object[] = [];

export const adminRouter = express.Router();
export const prods = products;
const views = path.join(rootDir, "views");

adminRouter.get("/add-product", (req, res) => {
  res.render("add-product", { prods: products, pageTitle: "Add Product" });
});
adminRouter.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});
export { products };
