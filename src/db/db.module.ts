import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/Client';
import { Invoice } from './entities/Invoice';
import { User } from './entities/User';
import { Quote } from './entities/Quote';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DB_HOST || 'localhost',
        port: 3306,
        database: 'ventas',
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '1234',
        autoLoadEntities: true,
        synchronize: false,
        entities: [ Client, Invoice, User, Quote ],
        logging: ['query', 'error'],
        logger: "file"
    })],
})

export class DatabaseModule {}
