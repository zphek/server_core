import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { updateUser } from './dto/user-dto';

@ApiTags("User's endpoints:")
@Controller('users')
@UseGuards(AuthGuard)
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
    updateUser(@Body() response:updateUser){
        
    }

    @Delete('delete/:id')
    deleteUser(@Param('id') id:number){
        
    }
}
