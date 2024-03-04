import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { createProduct } from './dto/products-dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Products endpoints:")
@Controller('products')
export class ProductsController {

    @Get("get")
    getProducts(){

    }

    @Get("get/:id")
    getProductById(){

    }

    @Post("create")
    createProduct(@Body() response:createProduct){

    }

    @Put("update")
    updateProduct(){

    }
}
