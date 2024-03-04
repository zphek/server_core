import { Module } from '@nestjs/common';
import { ProductCService } from './product_c.service';
import { ProductCController } from './product_c.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product_C } from 'src/db/entities/Product_C';

@Module({
  imports: [TypeOrmModule.forFeature([Product_C])],
  controllers: [ProductCController],
  providers: [ProductCService],
})
export class ProductCModule {}
