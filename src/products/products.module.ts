import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/db/entities/Product';
import { Product_C } from 'src/db/entities/Product_C';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Product_C]), CloudinaryModule],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
