import express, { Request, Response } from "express";

export const getSlash = (req: Request, res: Response) => {
  res.render("index", { pageTitle: "Home" });
};
