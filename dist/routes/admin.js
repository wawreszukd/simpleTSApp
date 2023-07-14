"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
const admin_1 = require("../controllers/admin");
exports.adminRouter = express_1.default.Router();
exports.adminRouter.get("/add-product", admin_1.getAddProduct);
exports.adminRouter.post("/add-product", admin_1.postAddProduct);
//# sourceMappingURL=admin.js.map