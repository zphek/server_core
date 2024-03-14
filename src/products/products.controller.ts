import { Body, Controller, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, Post, Put, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UpdateProduct, createProduct } from './dto/products-dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ProductsService } from './products.service';
import { FileInterceptor } from '@nestjs/platform-express';

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

    @Post("create")
    @UseInterceptors(FileInterceptor('file'))
    @UseGuards(AuthGuard)
    async createProduct(@UploadedFile(new ParseFilePipe({
        validators: [
            new MaxFileSizeValidator({ maxSize: 500*500*2 }),
            new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' })
        ]
    })) file: Express.Multer.File, @Body() response:createProduct){
        return await this.service.createProduct(response, file);
    }

    @Put("update")
    @UseGuards(AuthGuard)
    async updateProduct(@Body() response:UpdateProduct){
        return await this.service.updateProduct(response);
    }
}