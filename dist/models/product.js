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
const p = path_1.default.join(path_2.rootDir, "data", "products.json");
const getProductsFromFile = (cb) => {
    fs_1.default.readFile(p, (error, data) => {
        if (error) {
            cb([]);
        }
        cb(JSON.parse(data.toString()));
    });
};
class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        if (!fs_1.default.existsSync(p)) {
            fs_1.default.writeFileSync(p, "[]");
        }
        getProductsFromFile((products) => {
            products.push(this);
            fs_1.default.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    }
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map