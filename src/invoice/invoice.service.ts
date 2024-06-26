import { HttpCode, HttpException, HttpStatus, Injectable, UseGuards } from '@nestjs/common';
import { CreateInvoice, addItems } from './dto/invoice-dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from 'src/db/entities/Invoice';
import { DataSource, Repository } from 'typeorm';
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
    private readonly ServiceRepository:Repository<Service>,
    private readonly dataSource:DataSource
  ){}

  create(createInvoiceDto: CreateInvoice) {
    return createInvoiceDto;
  }

  async getInvoices() {
    return await this.InvoiceRepository.find();
  }

  async addItems(items:addItems, data:payload){
    let ID = 0;
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    
    try {
      if(items.invoice_id && data.privileges){
        ID = items.invoice_id;
      } else if(data.privileges.includes('Invoices') || data.privileges.includes('ALL')){
        
        if(!items.client_id) throw new HttpException("The given client_id is not valid.", HttpStatus.CONFLICT);
        
        const response = await queryRunner.manager.save(Invoice, {
          client_id: items.client_id,
          total_amount: 0,
          payment_method_id: items.payment_method
        });
        ID = response.ID

      } else {
        const response = await queryRunner.manager.save(Invoice, {
          client_id: data.user.client_id,
          total_amount: 0,
          payment_method_id: 1
        });
  
        ID = response.ID;
      }
  
      if (items.products) {
        try {
          for (const product of items.products) {
            const item = await queryRunner.manager.findOne(Product, { where: { ID: product.ID } });
            console.log(item.stock - product.quantity);
      
            if (!item) {
              throw new HttpException(`This product ${product.product_name} doesn't exist.`, HttpStatus.BAD_REQUEST); // Use a more specific status code
            } else if (item.stock - product.quantity <= 0) {
              throw new HttpException(`There's no stock for the product ${product.product_name}`, HttpStatus.BAD_REQUEST); // Use a more specific status code
            }
      
            const response = await queryRunner.manager.query("call detail_invoice(?, ?, ?, ?, ?)", [ID, product.ID, product.quantity, null, item.price]);
          }
        } catch (error) {
          // Handle errors thrown within the loop (e.g., database errors)
          // console.error("Error processing product:", error); // Log for debugging
          throw new HttpException( error.message || 'Internal server error', HttpStatus.INTERNAL_SERVER_ERROR); // Re-throw as HttpException
        }
      }
      
  
      if(items.services){
        try {
          for(const service of items.services){
            const item = await queryRunner.manager.findOne(Service, { where: { ID: service.ID } });
      
            if(!item){
              throw new HttpException(`There's no service with this name (${service.service_name})`, 500);
            }

            const response = await queryRunner.manager.query("call detail_invoice(?, ?, ?, ?, ?)", [ID, null, null, service.ID, item.price]);
          }
    
        } catch (error) {
          throw new HttpException( error.message || 'Internal server error', HttpStatus.INTERNAL_SERVER_ERROR); // Re-throw as HttpException
        }
      }

      await queryRunner.commitTransaction();

      return await queryRunner.manager.findOne(Invoice, { where: { ID } });

    } catch (error) {
      console.log('ERRORR')
      await queryRunner.rollbackTransaction();
      throw new HttpException(error.message || 'Internal server error', error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      await queryRunner.release();
    }
  }

  async getByEmail(email: string): Promise<Invoice[]> {
    try {
      const invoice = await this.InvoiceRepository.query(`SELECT * FROM invoices INNER JOIN clients ON invoices.client_id = clients.ID WHERE email = '${email}';`);

      if(!invoice){
        throw new Error("This email doesn't have invoices related to.");
      }

      return await invoice;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
  
  async getInvoicesDetails(ID:number){
    try {
      const invoice = await this.InvoiceRepository.findOne({ where: { ID }})

      if(!invoice){
        throw new Error("The given invoice id doesn't exist.");
      }

      const products = await this.InvoiceRepository.query(`SELECT products.ID, products.product_name, ipd.quantity, products.price, (ipd.quantity * products.price) AS total FROM invoices INNER JOIN invoice_product_details AS ipd ON ipd.invoice_id = invoices.ID INNER JOIN products ON products.ID = ipd.product_id WHERE invoices.ID = ${ID}`)
      const services = await this.InvoiceRepository.query(`SELECT services.ID, services.service_name, services.price, (services.price*1) AS total FROM invoices INNER JOIN invoice_service_details AS isd ON isd.invoice_id = invoices.ID  INNER JOIN services ON services.ID = isd.service_id WHERE invoices.ID = ${ID}`)

      return {
        invoice: invoice ? invoice : [null],
        products: products ? products : [null],
        services: services ? services : [null]
      }
      
    } catch (error) {
      throw new HttpException(error.message, 500); 
    }
  }

  async update(id: number, updateInvoiceDto: any) {
    return `This action updates a #${id} invoice`;
  }

  async remove(ID: number) {
    try {
      const invoice = await this.InvoiceRepository.findOne({ where:{ ID }})
      if(!invoice){
        throw new Error("This email doesn't have invoices related to.");
      }
      await this.InvoiceRepository.delete(invoice);

      return new HttpException("The email was successfully deleted!", 200);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
