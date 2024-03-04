import { Injectable } from '@nestjs/common';
import { CreateProductC } from './dto/create-product_c.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product_C } from 'src/db/entities/Product_C';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCService {
  constructor(
    @InjectRepository(Product_C)
    private readonly CategoryRepository:Repository<Product_C>
  ){}

  async create(response: CreateProductC) {
    const new_category = new Product_C();
    new_category.category_name = response.category_name;
    return await this.CategoryRepository.save(new_category);
  }

  async findAll() {
    return await this.CategoryRepository.find();
  }

  async findOne(ID: number) {
    return await this.CategoryRepository.findOne({
      where: {
        ID
      }
    });
  }

  update(id: number, updateProductCDto) {
    return `This action updates a #${id} productC`;
  }
}
