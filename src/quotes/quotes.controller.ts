import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Quotes endpoints:")
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
