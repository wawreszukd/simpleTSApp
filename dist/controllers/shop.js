"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShop = void 0;
const product_1 = require("../models/product");
const getShop = (req, res) => {
    const products = product_1.Product.fetchAll((products) => {
        res.render("shop", { products: products, pageTitle: "Shop list" });
    });
};
exports.getShop = getShop;
//# sourceMappingURL=shop.js.map