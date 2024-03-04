import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from 'src/db/entities/Quote';
import { Repository } from 'typeorm';

@Injectable()
export class QuotesService {
    constructor(
        @InjectRepository(Quote)
        private QuotesRepository:Repository<Quote>
    ){}

    async getAllQuotes(){
        return await this.QuotesRepository.find();
    }
    
    async getQuotesByUser(full_name:string){
        return await this.QuotesRepository.query('');
    }

    async createQuote(){
        return "";
    }

    async updateQuote(){
        return "";
    }
}
