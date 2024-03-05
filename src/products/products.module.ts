import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/db/entities/Product';
import { Product_C } from 'src/db/entities/Product_C';
import { Quote } from 'src/db/entities/Quote';
import { Quote_products } from 'src/db/entities/Quote_product';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Product_C, Quote, Quote_products])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
