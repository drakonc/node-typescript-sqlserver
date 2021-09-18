import { Request, Response } from 'express';

class IndexController {

    public async Index (req: Request, res: Response) {
        res.status(200).json({ message: 'Hola Mundo' });
    }

}

const index = new IndexController();
export default index;