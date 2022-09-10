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
const wed_router_1 = require("./src/routers/wed.router");
const data_source_1 = require("./src/data-source");
const Product_1 = require("./src/entity/Product");
const multer_1 = __importDefault(require("multer"));
const path = __importStar(require("path"));
const upload = (0, multer_1.default)();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const PORT = 3000;
data_source_1.AppDataSource.initialize().then(async (connection) => {
    const app = (0, express_1.default)();
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
    app.use(body_parser_1.default.json());
    app.use(express_1.default.static(path.join(__dirname, 'public')));
    app.use(express_1.default.json());
    const ProductRepo = connection.getRepository(Product_1.Product);
    let product = ProductRepo.find();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:3000`);
    });
    app.use('', wed_router_1.router);
}).catch((err) => {
    console.log(err.message);
});
//# sourceMappingURL=index.js.map