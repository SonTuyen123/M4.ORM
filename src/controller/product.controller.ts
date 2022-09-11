import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import {Product} from "../entity/Product"
import multer from 'multer';
import * as path from "path";
import {Like} from "typeorm";
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
             name : `${data.name}`,
             age : `${data.age}`,
             phone : `${data.phone}`,
             address : `${data.address}`
         });
         res.redirect('/product');
    }
    findProduct = async (req: Request, res: Response) => {
        let keyword = req.query.keyword;
        let data = await this.ProductRepo.findBy({
            name: Like(`%${keyword}%`),
        })
        if(data.length > 0) {
            res.render('../views/product/list',{Products:data});
        }
        else {
            res.render('../views/product/list',{Products:data});
        }

    }
    showHomeEditProduct = async (req: Request, res: Response) => {
        let id = req.query.id;

        let findProductById = await this.ProductRepo.find({
            where :{id:id}
        })
        // console.log(findProductById);
        res.render('../views/product/edit',{Products:findProductById});
    }
    editProduct = async (req: Request, res: Response) => { 
        let data = req.body;
        // console.log(data)
        await this.ProductRepo.createQueryBuilder()
        .update(Product)
            .set({
                name : `${data.name}`,
                age : `${data.age}`,
                phone : `${data.phone}`,
                address : `${data.address}`
            })
        .where("id = :id", { id: `${data.id}` })
        .execute()
        res.redirect('/product')
    }

}
export default new ProductController();