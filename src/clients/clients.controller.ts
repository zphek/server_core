import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { createClient } from './dto/client-dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@ApiTags("Clients endpoints:")
@Controller('clients')
@UseGuards(AuthGuard)
export class ClientsController {
    constructor( private clientsService: ClientsService ){}

    @Post("create")
    createClient(@Body() response: createClient){
        return response;
    }

    @Get("get")
    getClients(@Req() request:Request){
        console.log(request['user']);
        return this.clientsService.getClients();
    }

    @Get("get/:id")
    getClientById(@Param('id') id:number){
        return this.clientsService.getClientsById(id);
    }

    @Put("update")
    updateClient(){
        
    }
}
