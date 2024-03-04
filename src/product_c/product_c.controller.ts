import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductCService } from './product_c.service';
import { CreateProductC } from './dto/create-product_c.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('category')
@UseGuards(AuthGuard)
export class ProductCController {
  constructor(private readonly productCService: ProductCService) {}

  @Post('create')
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
  findOne(@Param('id') id: number) {
    return "..........";
  }
}
