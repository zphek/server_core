import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account_R } from 'src/db/entities/Account_R';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsReceivableService {
    constructor(
        @InjectRepository(Account_R)
        private readonly AccountsReceivable:Repository<Account_R>
    ) {}

    async getAllAccounts(){
        return await this.AccountsReceivable.find();
    }

    async getAccountById(ID:number){
        return await this.AccountsReceivable.findOne({ where:{account_id: ID}});
    }

    async updateAccount(){
        return await this.AccountsReceivable.update({
            account_id: 1
        }, {});
    }
}
