import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsNotEmpty, IsNumber } from "class-validator";

enum AccountStatus {
    PENDING = 'Pending',
    PAID = 'Paid',
}

export class createAccountR{
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    invoice_id: number
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    amount: number

    @IsDate()
    @IsNotEmpty()
    @ApiProperty()
    due_date: Date
    
    @IsEnum(AccountStatus)
    @IsNotEmpty()
    @ApiProperty()
    status: AccountStatus;
}
