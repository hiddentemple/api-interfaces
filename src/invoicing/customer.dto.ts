import {AddressModel, ContactModel, EmailModel, PhoneModel, WebpageModel} from "../contact";
import {IsDefined, IsOptional, Length} from "class-validator";

export class CustomerDTO {
    @IsDefined()
    @Length(2, 50)
    name: string;

    @IsOptional()
    @Length(2, 50)
    attn?: string | ContactModel;

    @IsOptional()
    @Length(2, 50)
    address?: AddressModel;

    @IsOptional()
    @Length(2, 50)
    phones?: PhoneModel[];

    @IsOptional()
    @Length(2, 50)
    email?: EmailModel;

    @IsOptional()
    @Length(2, 50)
    webpage?: WebpageModel;

    @IsOptional()
    @Length(2, 50)
    salesTech?: string;

    @IsOptional()
    @Length(2, 50)
    notes?: string;

    @IsOptional()
    @Length(2, 50)
    active?: boolean;

    @IsOptional()
    @Length(2, 50)
    createdAt?: Date;

    @IsOptional()
    @Length(2, 50)
    updatedAt?: Date;
}
