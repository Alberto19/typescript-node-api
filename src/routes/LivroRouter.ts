import { LivroDAO } from '../domain/DAO/livroDAO';
import { Router, Request, Response, NextFunction } from 'express';

export class LivroRouter{
    router: Router
    li
    constructor(){
        this.router = Router();
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction ){
        res.send();
    }

    init(){
        this.router.get('/', this.getAll);
    }
}
    const heroRoutes = new LivroRouter();
    heroRoutes.init();

    export default heroRoutes.router;