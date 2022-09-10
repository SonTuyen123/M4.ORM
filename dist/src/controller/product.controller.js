"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Product_1 = require("../entity/Product");
class ProductController {
    constructor() {
        this.listProduct = async (req, res) => {
            let data = await this.ProductRepo.find();
            console.log(data);
            res.render('../views/product/index', { staffs: data });
        };
        data_source_1.AppDataSource.initialize().then(async (connection) => {
            this.ProductRepo = connection.getRepository(Product_1.Product);
        });
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product.controller.js.map