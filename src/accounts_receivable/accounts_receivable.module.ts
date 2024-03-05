import { Module } from '@nestjs/common';
import { AccountsReceivableService } from './accounts_receivable.service';
import { AccountsReceivableController } from './accounts_receivable.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account_R } from 'src/db/entities/Account_R';

@Module({
    imports: [TypeOrmModule.forFeature([Account_R])],
    controllers: [AccountsReceivableController],
    providers: [AccountsReceivableService]
})
export class AccountsReceivableModule {}