import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ){}

    async findAll(): Promise<Book[]>{
        return await this.bookModel.find();
        
    }

    async createBook(book: Book): Promise<Book>{
        const res = this.bookModel.create(book);
        return res
    }

    getBooks(){
        const books = this.findAll()
        return Object.values(books)
    }
}
