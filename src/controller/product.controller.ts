import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import {Product} from "../entity/Product"
import multer from 'multer';
import * as path from "path";
const upload = multer();

class ProductController {

    ProductRepo;

    constructor() {
        AppDataSource.initialize().then(async connection => { 
            this.ProductRepo = connection.getRepository(Product);
        
        });
    }
     listProduct = async(req: Request, res: Response) => {
        let data = await this.ProductRepo.find()
        res.render('../views/product/list',{Products:data});
    }
    product = async(req: Request, res: Response) => {
       
        res.render('../views/product/index');
    }
    deleteProduct = async (req: Request, res: Response) => {
        let id = req.query.id;
         await this.ProductRepo.createQueryBuilder() .delete() .from(Product).where("id = :id", { id: id }).execute()
        res.redirect('/product');
    }
    ShowFormCreateProduct = async (req: Request, res: Response) => {
    
        res.render('../views/product/create');
    }
    createProduct = async (req: Request, res: Response) => {
         let data = req.body;
        await this.ProductRepo.insert({
             name : `'${data.name}'`,
             age : `'${data.age}'`,
             phone : `'${data.name}'`,
             address : `'${data.address}'`
         });
         res.redirect('/product');
    }

}
export default new ProductController();