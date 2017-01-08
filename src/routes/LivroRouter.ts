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
    public async findAll(req: Request, res: Response, next: NextFunction ){
        let Livros = new LivroDAO();
        res.json(await Livros.findAll());
    }
    public async findById(req: Request, res: Response, next: NextFunction){
        const Livros = new LivroDAO();
        res.json(await Livros.findById(req.body.id));
    }

    init(){
        this.router.get('/', this.findAll);
        this.router.post('/create', this.create);
        this.router.post('/findById', this.findById);
    }
}
    const livroRoutes = new LivroRouter();
    livroRoutes.init();

    export default livroRoutes.router;