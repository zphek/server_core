import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService) {}

    @Get('get')
    getAllUsers(){
        return this.usersService.getAllUsers();
    }

    @Get('get/:id')
    getUsersById(@Param('id') id: number){
        return this.usersService.getUserById(id);
    }

    @Put('update')
    updateUser(){
        return '...';
    }
}
