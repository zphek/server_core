import { Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { QuotesService } from './quotes.service';

@ApiTags("Quotes endpoints:")
@Controller('quotes')
@UseGuards(AuthGuard)
export class QuotesController {
    constructor(
        private readonly services:QuotesService
    ){}

    @Get("get")
    async getAllQuotes(){
        return await this.services.getAllQuotes();
    }
    
    @Get("get/:full_name")
    async getQuotesByUser(@Param('full_name') full_name:string){
        return await this.services.getQuotesByUser(full_name);
    }

    @Post("create")
    async createQuote(){
        return await this.services.createQuote();
    }

    @Put("update")
    async updateQuote(){
        return await this.services.updateQuote();
    }
}
