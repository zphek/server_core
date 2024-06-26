import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from 'src/db/entities/Service';
import { Repository } from 'typeorm';
import { createService, updateService } from './dto/services-dto';

@Injectable()
export class ServicesService {
    constructor(
        @InjectRepository(Service)
        private readonly ServiceRepository:Repository<Service>
    ){}

    async getServices(){
        return await this.ServiceRepository.find();
    }

    async getServicesById(ID:number){
        return await this.ServiceRepository.findOne({
            where:{
                ID
            }
        });
    }

    async createService(data:createService){
        const service = new Service({
            service_name: data.service_name,
            price: data.price,
            services_description: data.services_description
        });

        return await this.ServiceRepository.save(service);
    }

    async updateService(ID:number, data:updateService){
        const service = await this.ServiceRepository.findOne({ where: { ID } });
        
        return await this.ServiceRepository.save(service);
    }

    async deleteService(ID:number){
        return await this.ServiceRepository.update(ID, {
            isVisible: false
        })
    }
}
