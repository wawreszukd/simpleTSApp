"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const path_2 = require("../utils/path");
const products = [];
class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        const p = path_1.default.join(path_2.rootDir, "data", "products.json");
        fs_1.default.readFile(p, (error, data) => {
            let products = [];
            if (!error) {
                products = JSON.parse(data.toString());
            }
            products.push(this);
            fs_1.default.writeFile(p, JSON.stringify(products), (err) => {
                if (err)
                    throw err;
            });
        });
    }
    static fetchAll(cb) {
        const p = path_1.default.join(path_2.rootDir, "data", "products.json");
        fs_1.default.readFile(p, (error, data) => {
            if (error) {
                cb([]);
            }
            cb(JSON.parse(data.toString()));
        });
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map