import express, { Request, Response } from "express";
import { products } from "../routes/admin";

export const getAddProduct = (req: Request, res: Response) => {
  res.render("add-product", { prods: products, pageTitle: "Add Product" });
};
export const postAddProduct = (req: Request, res: Response) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};
