import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();

describe('baseRoute', () => {

    it('Rota Principal', () => {
        chai
            .request(app)
            .get('/')
            .then(res => {
                expect(res.type)
                    .to
                    .eql('application/json');
            });
    });
    it('Valida Corpo', () => {
        chai
            .request(app)
            .get('/')
            .then(res => {
                expect(res.body.message)
                    .to
                    .eql('Hello World!');
            });
    });

    describe('Rota de livros', () => {

        it('Get Livros', () => {
            return chai
                .request(app)
                .get('/livros')
                .then(res => {
                    expect(res.status)
                        .to
                        .equal(200);
                    expect(res).to.be.json;
                });
        });
    });

    it('Create Livro', () => {
        return chai
            .request(app)
            .post('/livros/create')
            .send({"title": "Clean Code", "author": "Robert celil Martin"})
            .then( res => {
                expect(res.status)
                    .to
                    .equal(200);
                    expect(res).to.be.json;
            });
    });
    it('Get one Livro', () => {
        return chai
            .request(app)
            .post('/livros/findById')
            .send({"id": "5"})
            .then( res => {
                expect(res.status)
                    .to
                    .equal(200);
                    expect(res).to.be.json;
            });
    });

});