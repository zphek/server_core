import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { createProduct } from './dto/products-dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@ApiTags("Products endpoints:")
@Controller('products')
export class ProductsController {

    @Get("get")
    getProducts(){

    }

    @Get("get/:id")
    getProductById(){

    }

    @Post("addProduct")
    @UseGuards(AuthGuard)
    addProduct(){

    }

    @Post("create")
    @UseGuards(AuthGuard)
    createProduct(@Body() response:createProduct){

    }

    @Put("update")
    @UseGuards(AuthGuard)
    updateProduct(){

    }
}
