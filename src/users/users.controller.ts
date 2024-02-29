import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService) {}

    @Get()
    getAllUsers(){
        return "HOlaaaaa buenas como esta";
    }

    @Get(':id')
    getUsersById(@Param('id') id: number){
        return '...';
    }

    @Post()
    createUser(){
        return '...';
    }

    @Put()
    updateUser(){
        return '...';
    }
}
