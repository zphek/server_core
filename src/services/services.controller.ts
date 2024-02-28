import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { createService, updateService } from './dto/services-dto';
import { response } from 'express';

@Controller('services')
export class ServicesController {
    @Get()
    getServices(){

    }

    @Post()
    createServices(@Body() response:createService){

    }

    @Put()
    updateService(@Body() response:updateService){

    }
}
