import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('quotes')
export class QuotesController {
    
    @Get("get")
    getAllQuotes(){

    }
    
    @Get("get/:id")
    getQuotesByUser(){

    }

    @Post("create")
    createQuote(){

    }

    @Put("update")
    updateQuote(){

    }
}
