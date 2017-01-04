import {Livro} from '../models/livro';
import 'reflect-metadata';
import {createConnection} from 'typeorm';

export class LivroDAO {

    findAll(livro) {
        createConnection().then(async con => {
            let livroRepository = con.getRepository(Livro);
            await livroRepository.find(livro);
        }).catch(error => console.log('Erro ao pegar todos os livros', error));
    }

    findOne(livro) {
        createConnection().then(async con => {

            let livroRepository = con.getRepository(Livro);
            await livroRepository.findOne(livro);
        }).catch(error => console.log('Erro ao pegar um livro', error));
    }

    findById(id) {
        createConnection().then(async con => {
            let livroRepository = con.getRepository(Livro);
            await livroRepository.findOneById(id);
        }).catch(error => console.log('Erro ao pegar um livro por id', error));
    }
    persist(title, author,ano) {
        createConnection().then(async con => {
            let livro = new Livro();
                livro.title = title;
                livro.author = author;
                livro.ano = ano;    
            let livroRepository = con.getRepository(Livro);
            await livroRepository.persist(livro);
        }).catch(error => console.log('Erro ao pegar um livro', error));
    }

}
