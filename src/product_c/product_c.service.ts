import { Injectable } from '@nestjs/common';
import { CreateProductC } from './dto/create-product_c.dto';

@Injectable()
export class ProductCService {
  create(createProductCDto: CreateProductC) {
    return 'This action adds a new productC';
  }

  findAll() {
    return `This action returns all productC`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productC`;
  }

  update(id: number, updateProductCDto) {
    return `This action updates a #${id} productC`;
  }
}
