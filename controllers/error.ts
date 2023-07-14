import express, { Response, Request } from "express";

export const get404 = (req: Request, res: Response) => {
  res.render("404", { pageTitle: "404 Not Found" });
};
