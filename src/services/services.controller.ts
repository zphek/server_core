import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { createService, updateService } from './dto/services-dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ServicesService } from './services.service';

@ApiTags("Services endpoints:")
@Controller('services')
export class ServicesController {
    constructor(private readonly service:ServicesService) {}

    @Get("get")
    async getServices(){
        return await this.service.getServices();
    }

    @Get("get/:id")
    async getServicesById(@Param('id') id:number){
        return await this.service.getServicesById(id);
    }

    @Post("create")
    @UseGuards(AuthGuard)
    async createService(@Body() response:createService){
        return await this.service.createService(response);
    }

    @Put("update")
    @UseGuards(AuthGuard)
    async updateService(@Body('id') id:number, @Body() response:updateService){
        return await this.service.updateService(id, response);
    }

    @Delete('delete/:id')
    async deleteService(@Body('id') id:number){
        return await this.service.deleteService(id);
    }
}
