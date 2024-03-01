import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/db/entities/Client';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ClientsService {
    constructor( 
       @InjectRepository(Client) 
       private ClientRepository: Repository<Client>,
       private readonly entityManager: EntityManager,
    ){}
    
    getClients(){
        return this.ClientRepository.find();
    }
}
