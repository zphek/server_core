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
  findOne(@Param('id') id: number) {
    return this.invoiceService.getInvoiceDetails(id);
  }

  @Get('getByName/:client_name')
  async getByClientName(@Param('client_name') name:string){
    
    return await this.invoiceService.getByClientName(name);
  }

  @Post("add")
  @ApiBody({
    type: addItems,
    schema: {
      properties: {
        products: {
          type: 'array',
          items: {
            $ref: '#/components/schemas/Products' // Referencia a la clase Products
          }
        },
        services: {
          type: 'array',
          items: {
            $ref: '#/components/schemas/Services' // Referencia a la clase Services
          }
        },
        invoice_id: {
          type: 'number'
        }
      }
    }
  })
  async addToInvoice(@Body() items:addItems, @Req() request:Request){
    if(!items.services && !items.services){
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
