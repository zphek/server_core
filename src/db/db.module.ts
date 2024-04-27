import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/Client';
import { Invoice } from './entities/Invoice';
import { User } from './entities/User';
import { Quote } from './entities/Quote';
import { Account_R } from './entities/Account_R';
import { Profile } from './entities/Profile';
import { Product } from './entities/Product';
import { Service } from './entities/Service';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        database: 'ventas',
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        autoLoadEntities: true,
        synchronize: false,
        entities: [ Client, Invoice, User, Quote, Account_R, Profile, Product, Service ],
        logging: ['query', 'error'],
        logger: "file"
    })],
})

export class DatabaseModule {}
