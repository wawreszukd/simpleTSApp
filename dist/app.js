"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const path_1 = __importDefault(require("path"));
// @ts-ignore
const express_1 = __importDefault(require("express"));
const admin_1 = require("./routes/admin");
const shop_1 = require("./routes/shop");
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "..", "views"));
app.use("/static", express_1.default.static(path_1.default.join(__dirname, "..", "public")));
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/admin", admin_1.adminRouter);
app.use("/shop", shop_1.shopRoutes);
app.get("/", (req, res) => {
    res.render("index", { pageTitle: "Home" });
});
app.get("*", (req, res, next) => {
    res.render("404", { pageTitle: "404 Not Found" });
});
const server = http.createServer(app);
server.listen(3000);
console.log("Server running on port 3000");
//# sourceMappingURL=app.js.map