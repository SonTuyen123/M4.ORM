import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import {Product} from "../entity/Product"

class ProductController {

    ProductRepo;

    constructor() {
        AppDataSource.initialize().then(async connection => { 
            this.ProductRepo = connection.getRepository(Product);
        
        });
    }
     listProduct = async(req: Request, res: Response) => {
        let data = await this.ProductRepo.find()
        console.log(data);
        res.render('../views/product/index',{staffs:data});
    } 
}
export default new ProductController();