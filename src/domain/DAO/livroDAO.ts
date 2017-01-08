import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {Livro} from '../entity/livro';

export class LivroDAO {

    async findAll() {
        return await createConnection().then(async con => {
            const resposta = await con
                .getRepository(Livro)
                .find();
            con.close();
            return resposta;
        }).catch(error => console.log('erro ao pegar todos os livros', error));
    };

    async findOne(livro) {
        return await createConnection().then(async con => {
            const resposta = await con
                .getRepository(Livro)
                .findOne(livro);
            con.close();
            return resposta;
        }).catch(error => console.log('Erro ao pegar um livro', error));
    };

    async findById(id) {
        return await createConnection().then(async con => {
            const resposta = await con
                .getRepository(Livro)
                .findOneById(id);
            con.close();
            return resposta;
        }).catch(error => console.log('Erro ao pegar um livro por id', error));
    };
    async persist(title, author) {
        return await createConnection().then(async con => {
            const livro = new Livro();
            livro.title = title;
            livro.author = author;
            const res = await con
                .getRepository(Livro)
                .persist(livro);
            con.close();
            return res;
        }).catch(error => console.log('Erro ao salvar um livro', error));
    };

}
