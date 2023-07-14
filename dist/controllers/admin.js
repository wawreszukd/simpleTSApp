"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAddProduct = exports.getAddProduct = void 0;
const product_1 = require("../models/product");
const getAddProduct = (req, res) => {
    res.render("add-product", { pageTitle: "Add Product" });
};
exports.getAddProduct = getAddProduct;
const postAddProduct = (req, res) => {
    const product = new product_1.Product(req.body.title);
    product.save();
    res.redirect("/");
};
exports.postAddProduct = postAddProduct;
//# sourceMappingURL=admin.js.map