import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/db/entities/Product';
import { Product_C } from 'src/db/entities/Product_C';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Product_C])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
