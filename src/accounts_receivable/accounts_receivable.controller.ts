import { Controller, Get, Post, Put } from '@nestjs/common';

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
