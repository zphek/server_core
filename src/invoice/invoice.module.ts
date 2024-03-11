import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from 'src/db/entities/Invoice';
import { Product } from 'src/db/entities/Product';
import { Service } from 'src/db/entities/Service';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice, Product, Service])],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule {}
