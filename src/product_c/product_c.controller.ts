import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductCService } from './product_c.service';
import { CreateProductC } from './dto/create-product_c.dto';

@Controller('product-c')
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

  @Post('update')
  findOne(@Param('id') id: string) {
    return this.productCService.findOne(+id);
  }

  

}
