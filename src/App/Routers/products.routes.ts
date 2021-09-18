import { Router } from 'express';
import productsControllers from '../Controllers/products.controllers';

class ProductsRoute {
    public router: Router = Router();

    constructor(){
        this.Config();
    }

    private Config(): void {
        this.router.get("/products", productsControllers.getProducts);
    }
}

const productsRouter = new  ProductsRoute();
export default productsRouter.router;