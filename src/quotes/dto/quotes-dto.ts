import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsOptional, IsNumber, IsBoolean, IsNotEmpty, IsString } from "class-validator"

class Products{
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    ID: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    product_name: string
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    quantity: number
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    category_name: string
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    price: number
    
    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    isVisible: boolean
}

class Services{
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    ID: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    service_name: string

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    price: number

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    isVisible: boolean
}

export class createQuote{
    @IsArray()
    @ApiProperty({ type: () => Products }) // Referencia a la clase Products
    products: Products[]
  
    @IsArray()
    @ApiProperty({ type: () => Services }) // Referencia a la clase Services
    services: Services[]
  
    @IsOptional()
    @IsNumber()
    @ApiProperty()
    invoice_id: number
}