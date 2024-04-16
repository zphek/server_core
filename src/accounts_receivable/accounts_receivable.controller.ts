import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { createAccountR } from './dto/accounts-dto';
import { AccountsReceivableService } from './accounts_receivable.service';

@ApiTags("Accounts receivable endpoints:")
@Controller('accounts-receivable')
@UseGuards(AuthGuard)
export class AccountsReceivableController {
    constructor(private AcServices:AccountsReceivableService){}

    @Get("get")
    async getAllAccounts(){
        return await this.AcServices.getAllAccounts();
    }

    @Get("get/:id")
    async getAccountById(@Param('id') id:number){
        return await this.AcServices.getAccountById(id);
    }

    @Put("update")
    async updateAccount(){
        return await this.AcServices.updateAccount();   
    }
}
