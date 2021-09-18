import { Request, Response } from 'express';
import { DBConection } from '../DataBase';

class ProductsController {

    public async getProducts (req: Request, res: Response) {
        const db = new DBConection()
        const pool = await db.getConnection();
        const result = await pool?.request().query("SELECT * FROM products");
        const data = result?.recordset;
        const rowsAffected = result?.rowsAffected[0]
        pool?.close();
        res.status(200).json({ status: 200, rowsAffected, data });
    }

}

const products = new ProductsController();
export default products;