import express, { Request, Response } from "express";

import { Product } from "../models/product";

export const getShop = (req: Request, res: Response) => {
  const products = Product.fetchAll();
  res.render("shop", { products: products, pageTitle: "Shop list" });
};
