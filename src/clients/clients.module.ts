import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsService } from './clients.service';
import { Client } from '../db/entities/Client';
import { ClientsController } from './clients.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Client])],
    controllers: [ClientsController],
    providers: [ClientsService],
})

export class ClientsModule {}
