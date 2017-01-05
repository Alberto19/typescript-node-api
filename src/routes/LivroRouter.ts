import { LivroDAO } from '../domain/DAO/livroDAO';
import { Router, Request, Response, NextFunction } from 'express';

export class LivroRouter{
    router: Router
    LivroDAO: LivroDAO
    constructor(){
        this.router = Router();
        this.init();
    }

    public create(req: Request, res: Response, next: NextFunction ){
        let Livros = new LivroDAO();
        let body = req.body;
        Livros.persist(body.title,body.author);
    }
    public getAll(req: Request, res: Response, next: NextFunction ){
        let Livros = new LivroDAO();
       let valor = Livros.findAll();  
        res.json(valor);
    }

    init(){
        this.router.get('/', this.getAll);
        this.router.post('/create', this.create);
    }
}
    const livroRoutes = new LivroRouter();
    livroRoutes.init();

    export default livroRoutes.router;