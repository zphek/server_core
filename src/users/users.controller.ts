import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService) {}

    @Get()
    getAllUsers(){
        return {
            mssge: "BUenasssssss",
            error: true,
            mesage: "La verdadera pueba e eta manito"
        };
    }

    @Get(':id')
    getUsersById(@Param('id') id: number){
        return {
            name: "Bernardo",
            lastname: "Baez",
            id
        };
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
