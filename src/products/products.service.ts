import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/db/entities/Product';
import { Repository } from 'typeorm';
import { UpdateProduct, createProduct } from './dto/products-dto';
import { Product_C } from 'src/db/entities/Product_C';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

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
        private readonly CloudService:CloudinaryService
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

    // async addProduct(response:addProduct, user:any){
    //     const quote = await this.QuoteRepository.save({
    //         client_id: user.ID,
    //         quote_date: new Date(),
    //         Status: "Pending",
    //         total_amount: 0
    //     })

    //     try {
    //         response.products.map(async (ele)=>{
    //             const qp = await this.QuoteProductsRepository.save({
    //                 id_product: ele.ID,
    //                 id_quote: quote.ID,
    //                 quantity: ele.quantity,
    //             })
    //         });
    //     } catch (error) {
    //         throw error;
    //     }

    //     return { message: "Successful!", error: false }
    // }

    async createProduct(new_product: createProduct, file:Express.Multer.File) {
        
        const productExist = this.ProductRepository.findOne({
            where: {
                product_name: new_product.product_name
            }
        });

        if(!productExist){
            throw new ProductAlreadyExistsException();
        }

        const {url} = await this.CloudService.uploadFile(file);
        //const url = "";
        return await this.ProductRepository.save({
            product_name: new_product.product_name,
            price: new_product.price,
            category_id: new_product.category_id,
            stock: new_product.stock,
            url_image: url,
            isVisible: new_product.isVisible
        });
    }

    async updateProduct(response: UpdateProduct){
        const updated_product = await this.ProductRepository.update(response.ID, { 
            product_name: response.product_name,
            stock: response.stock,
            price: response.price,
            isVisible: response.isVisible,
            category_id: response.category_id
         })

         return updated_product;
    }
}
