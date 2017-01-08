import { LivroDAO } from '../domain/DAO/livroDAO';
import { Router, Request, Response, NextFunction } from 'express';

export class LivroRouter{
    router: Router
    constructor(){
        this.router = Router();
        this.init();
    }

    public async create(req: Request, res: Response, next: NextFunction ){
        let Livros = new LivroDAO();
        res.json(await Livros.persist(req.body.title,req.body.author));
    }
    public async getAll(req: Request, res: Response, next: NextFunction ){
        let Livros = new LivroDAO();
        res.json(await Livros.findAll());
    }

    init(){
        this.router.get('/', this.getAll);
        this.router.post('/create', this.create);
    }
}
    const livroRoutes = new LivroRouter();
    livroRoutes.init();

    export default livroRoutes.router;