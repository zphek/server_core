import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { addProduct, createProduct } from './dto/products-dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ProductsService } from './products.service';
import { Product } from 'src/db/entities/Product';

@ApiTags("Products endpoints:")
@Controller('products')
export class ProductsController {
    constructor(
        private readonly service:ProductsService
    ) {}

    @Get("get")
    async getProducts(){
        return this.service.getProducts();
    }

    @Get("get/:id")
    getProductById(@Param('id') id:number){
        return this.service.getProductById(id);
    }

    @Get("filter/:category")
    async filterProductsByCategory(@Param('category') category:string){
        return await this.service.filterProductsByCategory(category);
    }

    @Post("addProduct")
    @UseGuards(AuthGuard)
    async addProduct(@Body() response:addProduct){
        return await this.service.addProduct(response);
    }

    @Post("create")
    @UseGuards(AuthGuard)
    async createProduct(@Body() response:createProduct){
        return await this.service.createProduct(response);
    }

    @Put("update")
    @UseGuards(AuthGuard)
    updateProduct(){

    }
}