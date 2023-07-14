import express from "express";
import path from "path";

import { products } from "./admin";

export const shopRoutes = express.Router();

shopRoutes.get("/", (req, res) => {
  res.render("shop", { products: products, pageTitle: "Shop list" });
});
shopRoutes.post("/", (req, res) => {
  res.send("Shop routes");
});
