import { AppDataSource } from "../data-source";
import {Product} from "../entity/Product"

export class ProductModel{

    getAllProducts() { 
        AppDataSource.initialize().then(async connection => { 
            const ProductRepo = connection.getRepository(Product);
             await ProductRepo.find()
        });
    }
}

