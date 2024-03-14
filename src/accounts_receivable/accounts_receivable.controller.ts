import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { createAccountR } from './dto/accounts-dto';

@ApiTags("Accounts receivable endpoints:")
@Controller('accounts-receivable')
@UseGuards(AuthGuard)
export class AccountsReceivableController {
    @Get("get")
    getAllAccounts(){

    }

    @Get("get/:id")
    getAccountById(){

    }

    @Post("create")
    createAccount(@Body() response:createAccountR){
        
    }

    @Put("update")
    updateAccount(){
        
    }
}
