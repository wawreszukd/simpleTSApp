"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get404 = void 0;
const get404 = (req, res) => {
    res.render("404", { pageTitle: "404 Not Found" });
};
exports.get404 = get404;
//# sourceMappingURL=error.js.map