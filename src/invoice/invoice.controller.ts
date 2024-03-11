import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Req, HttpException } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoice, addItems } from './dto/invoice-dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@Controller('invoice')
@ApiTags('Invoices endpoints:')
@UseGuards(AuthGuard)
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post('create')
  create(@Body() createInvoiceDto: CreateInvoice) {
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get('get')
  findAll() {
    return this.invoiceService.getInvoices();
  }

  @Post("add")
  async addToInvoice(@Body() items:addItems, @Req() request:Request){
    if(!items.services && !items.services){
      throw new HttpException("There's no Services or Products to add.", 500);
    }

    const data = request['user']
    return await this.invoiceService.addItems(items, data);
  }

  @Get('get/:id')
  findOne(@Param('id') id: number) {
    return this.invoiceService.getInvoiceDetails(id);
  }

  @Put('update')
  update(@Param('id') id: string, @Body() updateInvoiceDto: any) {
    return this.invoiceService.update(+id, updateInvoiceDto);
  }
}
