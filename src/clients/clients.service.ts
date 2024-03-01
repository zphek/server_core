import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/db/entities/Client';
import { EntityManager, Repository } from 'typeorm';
import { createClient } from './dto/client-dto';

@Injectable()
export class ClientsService {
    constructor( 
       @InjectRepository(Client) 
       private ClientRepository: Repository<Client>,
       private readonly entityManager: EntityManager,
    ){}
    
    createClient(response: createClient){
        const {client_fullname, email, phone_number} = response;
        this.ClientRepository.create({
            client_fullname,

        })   
    }

    getClients(){
        return this.ClientRepository.find();
    }
}
