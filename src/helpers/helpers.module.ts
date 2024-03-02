import { Module } from '@nestjs/common';
import { crypt } from './bcrypt';

@Module({
    providers: [crypt],
})

export class ClientsModule {}