import { Request, Response } from "express";
declare class ProductController {
    ProductRepo: any;
    constructor();
    listProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
