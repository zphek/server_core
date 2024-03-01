import { Controller, Get } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
    constructor( private clientsService: ClientsService ){}

    @Get("/get")
    getClients(){
        return this.clientsService.getClients();
    }
}
