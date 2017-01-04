import { Column, PrimaryColumn, Table } from 'typeorm';
@Table()
export class Livro{
    @PrimaryColumn('int', {generated: true})
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column('datetime')
    ano: Date;

}