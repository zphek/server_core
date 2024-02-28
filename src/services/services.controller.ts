import { Body, Controller, Get, Post } from '@nestjs/common';
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

    @Post()
    updateService(@Body() response:updateService){

    }
}
