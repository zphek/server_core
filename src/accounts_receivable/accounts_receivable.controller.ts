import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Accounts receivable endpoints:")
@Controller('accounts-receivable')
export class AccountsReceivableController {
    @Get("get")
    getAllAccounts(){

    }

    @Get("get/:id")
    getAccountById(){

    }

    @Post("create")
    createAccount(){
        
    }

    @Put("update")
    updateAccount(){
        
    }
}
