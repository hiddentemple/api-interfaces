import {IsDefined, IsOptional, Length} from "class-validator";

export class LineItemDTO {

    @IsDefined()
    @Length(2, 50)
    name: string;

    @IsDefined()
    @Length(2, 50)
    quantity: number;

    @IsDefined()
    @Length(2, 50)
    itemCategory: string;

    @IsOptional()
    @Length(2, 50)
    description?: string;

    @IsDefined()
    @Length(2, 50)
    unitPrice: number;

    @IsDefined()
    @Length(2, 50)
    totalPrice: number;

    @IsOptional()
    @Length(2, 50)
    warranty?: string;
}
