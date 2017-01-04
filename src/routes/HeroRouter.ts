import { Router, Request, Response, NextFunction } from 'express';

//const Heroes = require('../d');


export class HeroRouter{
    router: Router

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
    const heroRoutes = new HeroRouter();
    heroRoutes.init();

    export default heroRoutes.router;