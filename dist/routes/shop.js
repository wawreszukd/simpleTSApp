"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopRoutes = void 0;
const express_1 = __importDefault(require("express"));
const shop_1 = require("../controllers/shop");
exports.shopRoutes = express_1.default.Router();
exports.shopRoutes.get("/", shop_1.getShop);
//# sourceMappingURL=shop.js.map