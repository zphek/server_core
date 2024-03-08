import { Injectable } from '@nestjs/common';
import { CreateInvoice } from './dto/invoice-dto';

@Injectable()
export class InvoiceService {
  create(createInvoiceDto: CreateInvoice) {
    return createInvoiceDto;
  }

  findAll() {
    return `This action returns all invoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  update(id: number, updateInvoiceDto: any) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
