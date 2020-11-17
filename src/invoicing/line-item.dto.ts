import {IsDefined, IsNumber, IsOptional, Length} from "class-validator";

export class LineItemDTO {

    @IsDefined()
    @Length(2, 255)
    name: string;

    @IsDefined()
    @IsNumber()
    quantity: number;

    @IsDefined()
    @Length(2, 255)
    itemCategory: string;

    @IsOptional()
    @Length(2, 255)
    description?: string;

    @IsDefined()
    @IsNumber()
    unitPrice: number;

    @IsDefined()
    @IsNumber()
    totalPrice: number;

    @IsOptional()
    @Length(2, 255)
    warranty?: string;
}
