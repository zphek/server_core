import { Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@ApiTags("Quotes endpoints:")
@Controller('quotes')
@UseGuards(AuthGuard)
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
