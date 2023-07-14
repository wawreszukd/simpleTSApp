"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_1 = require("./admin");
exports.shopRoutes = express_1.default.Router();
exports.shopRoutes.get("/", (req, res) => {
    res.render("shop", { products: admin_1.products, pageTitle: "Shop list" });
});
exports.shopRoutes.post("/", (req, res) => {
    res.send("Shop routes");
});
//# sourceMappingURL=shop.js.map