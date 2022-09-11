import { Request, Response, Router } from "express";
import productController from "../controller/product.controller";
import multer from 'multer';
import * as path from "path";
const upload = multer();
import express from "express";

export const router = Router()

router.get('/product', productController.listProduct);

router.get('/', productController.product);
router.get('/product/delete', productController.deleteProduct);
router.get('/create', productController.ShowFormCreateProduct);
router.post('/create', upload.none(), productController.createProduct);