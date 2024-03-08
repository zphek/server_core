import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductCService } from './product_c.service';
import { CreateProductC } from './dto/create-product_c.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('category')
@ApiTags('Categories endpoints:')
export class ProductCController {
  constructor(private readonly productCService: ProductCService) {}

  @Post('create')
  @UseGuards(AuthGuard)
  create(@Body() response: CreateProductC) {
    return this.productCService.create(response);
  }

  @Get('get')
  findAll() {
    return this.productCService.findAll();
  }

  @Get('get/:id')
  findById(@Param('id') ID:number) {
    return this.productCService.findOne(ID);
  }

  @Post('update')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: number) {
    return "..........";
  }
}
