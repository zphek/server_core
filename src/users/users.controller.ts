import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService) {}

    @Get()
    getAllUsers(){
        return "HOlaaaa";
    }

    @Get(':id')
    getUsersById(@Param('id') id: number){
        return '...';
    }

    @Post()
    createUser(){
        return '...';
    }

    @Post()
    updateUser(){
        return '...';
    }
}
