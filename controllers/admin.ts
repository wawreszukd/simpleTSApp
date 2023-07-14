import express, { Request, Response } from "express";
import { Product } from "../models/product";

export const getAddProduct = (req: Request, res: Response) => {
  res.render("add-product", { pageTitle: "Add Product" });
};
export const postAddProduct = (req: Request, res: Response) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};
