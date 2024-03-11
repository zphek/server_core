import { HttpCode, HttpException, HttpStatus, Injectable, UseGuards } from '@nestjs/common';
import { CreateInvoice, addItems } from './dto/invoice-dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from 'src/db/entities/Invoice';
import { Repository } from 'typeorm';
import { payload } from 'src/auth/dto/auth-dto';
import { Product } from 'src/db/entities/Product';
import { Service } from 'src/db/entities/Service';

@Injectable()
@UseGuards(AuthGuard)
export class InvoiceService {
  constructor( 
    @InjectRepository(Invoice)
    private readonly InvoiceRepository:Repository<Invoice>,
    @InjectRepository(Product)
    private readonly ProductRepository:Repository<Product>,
    @InjectRepository(Service)
    private readonly ServiceRepository:Repository<Service>
  ){}

  create(createInvoiceDto: CreateInvoice) {
    return createInvoiceDto;
  }

  async getInvoices() {
    return await this.InvoiceRepository.find();
  }

  async getInvoiceDetails(id: number) {
    return await this.InvoiceRepository.query("");
  }

  async addItems(items:addItems, data:payload){
    let ID = 0;
    
    try {
      if(items.invoice_id && data.privileges){
        ID = items.invoice_id;
  
      } else {
        const response = await this.InvoiceRepository.save({
          client_id: data.user.client_id,
          total_amount: 0,
          payment_method_id: 1
        })
  
        ID = response.ID;
      }
  
      if(items.products){
        items.products.map(async (product)=>{
  
          const item = await this.ProductRepository.findOne({ where: { ID: product.ID } });
          
          if(!item){
            throw new HttpException(`This product ${product.product_name} doesn't exist.`, 500);
          }
          else if((item.stock - product.quantity) <= 0){
            throw new HttpException(`There's no stock for the product ${product.product_name}`, 500);
          }
    
          const response = await this.InvoiceRepository.query("call detail_invoice(?, ?, ?, ?, ?)", [ID, product.ID, product.quantity, null, item.price]);
        })
      }
  
      if(items.services){
        items.services.map(async (service)=>{
          const item = await this.ServiceRepository.findOne({ where: { ID: service.ID } });
    
          if(!item){
            throw new HttpException(`There's no service with this name (${service.service_name})`, 500);
          }

          const response = await this.InvoiceRepository.query("call detail_invoice(?, ?, ?, ?, ?)", [ID, service.ID, null, service.ID, item.price]);
        })
      }

      return await this.InvoiceRepository.findOne({ where: { ID } });

    } catch (error) {
      throw new HttpException(error.message || 'Internal server error', error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getByClientName(name: string): Promise<Invoice[]> {
    return await this.InvoiceRepository.query('SELECT * FROM invoices INNER JOIN clients ON invoices.client_id = clients.ID;')
  }
  

  update(id: number, updateInvoiceDto: any) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
