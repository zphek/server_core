import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Req, HttpException } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoice, addItems } from './dto/invoice-dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
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

  @Get('get/:id')
  async findOne(@Param('id') id: number) {
    return await this.invoiceService.getInvoicesDetails(id);
  }

  @Get('getByEmail/:email')
  async getByClientName(@Param('email') email:string){
    return await this.invoiceService.getByEmail(email);
  }

  @Post("add")
  async addToInvoice(@Body() items:addItems, @Req() request:Request){
    if(!items.products && !items.services){
      throw new HttpException("There's no Services or Products to add.", 500);
    }

    const data = request['user']
    return await this.invoiceService.addItems(items, data);
  }

  @Put('update')
  update(@Param('id') id: string, @Body() updateInvoiceDto: any) {
    return this.invoiceService.update(+id, updateInvoiceDto);
  }
}
