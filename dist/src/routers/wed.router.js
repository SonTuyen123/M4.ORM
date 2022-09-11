"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controller/product.controller"));
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
exports.router = (0, express_1.Router)();
exports.router.get('/product', product_controller_1.default.listProduct);
exports.router.get('/', product_controller_1.default.product);
exports.router.get('/product/delete', product_controller_1.default.deleteProduct);
exports.router.get('/create', product_controller_1.default.ShowFormCreateProduct);
exports.router.post('/create', upload.none(), product_controller_1.default.createProduct);
//# sourceMappingURL=wed.router.js.map