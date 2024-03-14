import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class createProduct{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    product_name: string
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    stock: number
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    category_id: number

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    price: number

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    isVisible: boolean

    @IsNotEmpty()
    @ApiProperty()
    File: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    url_image: string
}

export class UpdateProduct{
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
    stock: number

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    category_id: number
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    price: number

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    isVisible: boolean
}
