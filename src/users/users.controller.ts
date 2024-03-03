import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService) {}

    @Get('get')
    async getAllUsers(){
        return await this.usersService.getAllUsers();
    }

    @Get('get/:id')
    async getUsersById(@Param('id') id: number){
        return await this.usersService.getUserById(id);
    }

    @Put('update')
    updateUser(){
        return '...';
    }
}
