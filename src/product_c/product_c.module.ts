import { Module } from '@nestjs/common';
import { ProductCService } from './product_c.service';
import { ProductCController } from './product_c.controller';

@Module({
  controllers: [ProductCController],
  providers: [ProductCService],
})
export class ProductCModule {}
