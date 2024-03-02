import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { response } from 'express';
import { createClient } from './dto/client-dto';

@Controller('clients')
export class ClientsController {
    constructor( private clientsService: ClientsService ){}

    @Post("/create")
    createClient(@Body() response: createClient){
        return response;
    }

    @Get("/get")
    getClients(){
        return this.clientsService.getClients();
    }
}
