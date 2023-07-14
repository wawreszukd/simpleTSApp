"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const products = [];
class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        products.push(this);
    }
    static fetchAll() {
        return products;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map