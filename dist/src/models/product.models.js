"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const data_source_1 = require("../data-source");
const Product_1 = require("../entity/Product");
class ProductModel {
    getAllProducts() {
        data_source_1.AppDataSource.initialize().then(async (connection) => {
            const ProductRepo = connection.getRepository(Product_1.Product);
            await ProductRepo.find();
        });
    }
}
exports.ProductModel = ProductModel;
//# sourceMappingURL=product.models.js.map