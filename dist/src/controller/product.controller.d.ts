import { Request, Response } from "express";
declare class ProductController {
    ProductRepo: any;
    constructor();
    listProduct: (req: Request, res: Response) => Promise<void>;
    product: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
    ShowFormCreateProduct: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
    findProduct: (req: Request, res: Response) => Promise<void>;
    showHomeEditProduct: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
