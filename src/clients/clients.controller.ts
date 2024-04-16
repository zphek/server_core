import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { createClient, updateClient } from './dto/client-dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { response } from 'express';

@ApiTags("Clients endpoints:")
@Controller('clients')
@UseGuards(AuthGuard)
export class ClientsController {
    constructor( private clientsService: ClientsService ){}

    @Post("create")
    async createClient(@Body() response: createClient){
        return await this.clientsService.createClient(response);
    }

    @Get("get")
    async getClients(@Req() request:Request){
        console.log(request['user']);
        return await this.clientsService.getClients();
    }

    @Get("get/:id")
    async getClientById(@Param('id') id:number){
        return await this.clientsService.getClientsById(id);
    }

    @Delete("delete/:id")
    async deleteClient(@Param('id') id:number){
        return await this.clientsService.deleteClient(id);
    }

    @Put("update")
    async updateClient(@Body() response:updateClient){
        return await this.clientsService.updateClient(response);
    }
}
