import { Injectable } from '@nestjs/common';
import client from 'db/models/client.model';

@Injectable()
export class ClientsService {
    getClients(){
        return client.findAll();
    }
}
