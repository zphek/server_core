import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { createService, updateService } from './dto/services-dto';
import { response } from 'express';

@Controller('services')
export class ServicesController {
    @Get("get")
    getServices(){

    }

    @Get("get/:id")
    getServicesById(){
        
    }

    @Post("create")
    createServices(@Body() response:createService){

    }

    @Put("update")
    updateService(@Body() response:updateService){

    }
}
