import { Module } from '@nestjs/common';
import { AccountsReceivableService } from './accounts_receivable.service';
import { AccountsReceivableController } from './accounts_receivable.controller';

@Module({
    controllers: [AccountsReceivableController],
    providers: [AccountsReceivableService]
})
export class AccountsReceivableModule {}
