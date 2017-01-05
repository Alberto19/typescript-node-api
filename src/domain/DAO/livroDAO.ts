import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {Livro} from '../entity/livro';

export class LivroDAO {

    findAll() {
       createConnection().then(async con => {
            let livroRepository = con.getRepository(Livro);
            let livros = await livroRepository.find();
            console.log(livros);
        }).catch(error => console.log('Erro ao pegar todos os livros', error));
        
    };

    findOne(livro) {
        createConnection().then(async con => {

            let livroRepository = con.getRepository(Livro);
            await livroRepository.findOne(livro);
        }).catch(error => console.log('Erro ao pegar um livro', error));
    };

    findById(id) {
        createConnection().then(async con => {
            let livroRepository = con.getRepository(Livro);
            await livroRepository.findOneById(id);
        }).catch(error => console.log('Erro ao pegar um livro por id', error));
    };
    persist(title, author) {
        createConnection().then(async con => {
            const livro = new Livro();
            livro.title = title;
            livro.author = author;
            const livroRepository = con.getRepository(Livro);
            await livroRepository.persist(livro);
        }).catch(error => console.log('Erro ao salvar um livro', error));
    };

}
