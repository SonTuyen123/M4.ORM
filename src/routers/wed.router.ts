import { Request, Response, Router } from "express";
import productController from "../controller/product.controller";


export const router = Router()

router.get('/', productController.listProduct);