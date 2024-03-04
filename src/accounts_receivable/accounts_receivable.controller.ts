import { Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';

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
    createAccount(){
        
    }

    @Put("update")
    updateAccount(){
        
    }
}
