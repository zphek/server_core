import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoice } from './dto/invoice-dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';


@Controller('invoice')
@UseGuards(AuthGuard)
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post('create')
  create(@Body() createInvoiceDto: CreateInvoice) {
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get('get')
  findAll() {
    return this.invoiceService.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: number) {
    return this.invoiceService.findOne(id);
  }

  @Put('update')
  update(@Param('id') id: string, @Body() updateInvoiceDto: any) {
    return this.invoiceService.update(+id, updateInvoiceDto);
  }
}
