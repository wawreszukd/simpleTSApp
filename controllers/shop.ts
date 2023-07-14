import express, { Request, Response } from "express";
import { products } from "../routes/admin";

export const getShop = (req: Request, res: Response) => {
  res.render("shop", { products: products, pageTitle: "Shop list" });
};
