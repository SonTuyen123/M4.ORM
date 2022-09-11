"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Product_1 = require("../entity/Product");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
class ProductController {
    constructor() {
        this.listProduct = async (req, res) => {
            let data = await this.ProductRepo.find();
            res.render('../views/product/list', { Products: data });
        };
        this.product = async (req, res) => {
            res.render('../views/product/index');
        };
        this.deleteProduct = async (req, res) => {
            let id = req.query.id;
            await this.ProductRepo.createQueryBuilder().delete().from(Product_1.Product).where("id = :id", { id: id }).execute();
            res.redirect('/product');
        };
        this.ShowFormCreateProduct = async (req, res) => {
            res.render('../views/product/create');
        };
        this.createProduct = async (req, res) => {
            let data = req.body;
            await this.ProductRepo.insert({
                name: `'${data.name}'`,
                age: `'${data.age}'`,
                phone: `'${data.name}'`,
                address: `'${data.address}'`
            });
            res.redirect('/product');
        };
        data_source_1.AppDataSource.initialize().then(async (connection) => {
            this.ProductRepo = connection.getRepository(Product_1.Product);
        });
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product.controller.js.map