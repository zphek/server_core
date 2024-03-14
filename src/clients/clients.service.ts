import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/db/entities/Client';
import { EntityManager, Repository } from 'typeorm';
import { createClient, updateClient } from './dto/client-dto';

@Injectable()
export class ClientsService {
    constructor( 
       @InjectRepository(Client) 
       private ClientRepository: Repository<Client>
    ){}
    
    async createClient(response: createClient){
        const {client_fullname, email, phone_number} = response;
        return await this.ClientRepository.save({
            client_fullname,
            email, 
            phone_number
        });
    }

    async getClients(){
        return await this.ClientRepository.find();
    }

    async getClientsById(ID:number){
        return await this.ClientRepository.findOne({
            where:{
                ID
            }
        });
    }

    async updateClient(response:updateClient){
        return await this.ClientRepository.createQueryBuilder()
                     .update(Client)
                     .set({
                        client_fullname: response.client_fullname,
                        email: response.email
                     })
                     .where("phone_number = :p_number", { p_number: response.phone_number })
                     .execute();
    }
}
