import { router } from './src/routers/wed.router';
import { AppDataSource } from "./src/data-source";
import {Product} from "./src/entity/Product"
import multer from 'multer';
import * as path from "path";
const upload = multer();
import express from "express";
import bodyParser from 'body-parser';

const PORT = 3000;

AppDataSource.initialize().then(async connection => {

    const app = express();
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use(express.json());
    const ProductRepo = connection.getRepository(Product);
    let product = ProductRepo.find()
    
    app.listen(PORT,()=> {
        console.log(`Server is running on http://localhost:3000`);
    })

    app.use('',router)

  

}).catch((err) => { 
    console.log(err.message);
    
})