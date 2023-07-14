import * as http from "http";
import path from "path";
// @ts-ignore
import express, { Express, NextFunction, Request, Response } from "express";

import rootDir from "./utils/path";
import { adminRouter } from "./routes/admin";
import { shopRoutes } from "./routes/shop";
import { get404 } from "./controllers/error";
import { getSlash } from "./controllers/home";

const app: Express = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.use("/static", express.static(path.join(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRouter);
app.use("/shop", shopRoutes);
app.get("/", getSlash);

app.get("*", get404);

const server = http.createServer(app);

server.listen(3000);
console.log("Server running on port 3000");
