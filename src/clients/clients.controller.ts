import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { createClient } from './dto/client-dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Clients endpoints:")
@Controller('clients')
export class ClientsController {
    constructor( private clientsService: ClientsService ){}

    @Post("create")
    createClient(@Body() response: createClient){
        return response;
    }

    @Get("get")
    getClients(){
        return this.clientsService.getClients();
    }

    @Get("get/:id")
    getClientById(){

    }

    @Put("update")
    updateClient(){
        
    }
}
