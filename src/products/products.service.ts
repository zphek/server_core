import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/db/entities/Product';
import { Repository } from 'typeorm';
import { addProduct, createProduct } from './dto/products-dto';
import { Product_C } from 'src/db/entities/Product_C';
import { Quote } from 'src/db/entities/Quote';
import { Quote_products } from 'src/db/entities/Quote_product';

export class ProductAlreadyExistsException extends HttpException {
    constructor() {
        super('Product with this name already exists.', HttpStatus.CONFLICT);
    }
}

export class CategoryDontExitsException extends HttpException {
    constructor() {
        super('The product category given doesnt exist', HttpStatus.CONFLICT);
    }
}

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly ProductRepository:Repository<Product>,
        @InjectRepository(Product_C)
        private readonly Product_CRepository:Repository<Product_C>,
        @InjectRepository(Quote)
        private readonly QuoteRepository:Repository<Quote>,
        @InjectRepository(Quote_products)
        private readonly QuoteProductsRepository:Repository<Quote_products>
    ) {}

    async getProducts(){
        return await this.ProductRepository.query('SELECT products.ID, products.product_name, products.stock, products.price, products.isVisible, products.url_image, products_category.category_name FROM products INNER JOIN products_category ON products.category_id = products_category.ID;');
    }

    async getProductById(ID:number){
        return await this.ProductRepository.findOne({
            where:{
                ID,
                isVisible: true
            }
        });
    }

    async filterProductsByCategory(category_name:string){
        const category = await this.Product_CRepository.findOne({
            where:{
                category_name
            }
        });

        if(!category){
            throw new CategoryDontExitsException();
        }

        const products = await this.ProductRepository.find({
            where: {
                category_id: category.ID,
                isVisible: true
            }
          });

        return products;
    }

    async addProduct(response:addProduct, user:any){
        const quote = await this.QuoteRepository.save({
            client_id: user.ID,
            quote_date: new Date(),
            Status: "Pending",
            total_amount: 0
        })

        try {
            response.products.map(async (ele)=>{
                const qp = await this.QuoteProductsRepository.save({
                    id_product: ele.ID,
                    id_quote: quote.ID,
                    quantity: ele.quantity,
                })
            });
        } catch (error) {
            throw error;
        }

        return { message: "Successful!", error: false }
    }

    async createProduct(new_product: createProduct) {
        
        const productExist = this.ProductRepository.findOne({
            where: {
                product_name: new_product.product_name
            }
        });

        if(!productExist){
            throw new ProductAlreadyExistsException();
        }

        return await this.ProductRepository.save({
            product_name: new_product.product_name,
            price: new_product.price,
            category_id: new_product.category_id,
            stock: new_product.stock,
            url_image: new_product.url_image,
            isVisible: new_product.isVisible
        });
    }

    updateProduct(){

    }
}
