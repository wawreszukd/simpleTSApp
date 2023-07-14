"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.prods = exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const path_2 = __importDefault(require("../utils/path"));
const products = [];
exports.products = products;
exports.adminRouter = express_1.default.Router();
exports.prods = products;
const views = path_1.default.join(path_2.default, "views");
exports.adminRouter.get("/add-product", (req, res) => {
    res.render("add-product", { prods: products, pageTitle: "Add Product" });
});
exports.adminRouter.post("/add-product", (req, res) => {
    products.push({ title: req.body.title });
    res.redirect("/");
});
//# sourceMappingURL=admin.js.map