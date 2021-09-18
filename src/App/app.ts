import express, { Application } from 'express';
import { configuration } from './Config/config';
import morgan from 'morgan';
import cors from 'cors';

//Importar Rutas
import indexRouter from './Routers/index.routes';
import productsRouter from './Routers/products.routes';

export class Aplicacion {
    
    private app: Application;
    private port?: number | string;
    private route: any[];

    constructor(port? : number | string) {
        this.port = port;
        this.app = express();
        this.route = [indexRouter, productsRouter];
        this.Settings();
        this.Middleware();
        this.Routes();
    }

    private Settings(): void {
        this.app.set('port', this.port || configuration.port || 4000);
    }

    private Middleware(): void {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private Routes(): void {
        this.app.use('/api',this.route);
    }

    public async Start() {
        await this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor Corriendo en Puerto ${this.app.get('port')}`);
        });
    }
}