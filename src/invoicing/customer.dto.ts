import {
    AddressDTO,
    AddressModel,
    EmailDTO,
    EmailModel,
    PhoneDTO,
    PhoneModel,
    WebpageDTO,
    WebpageModel
} from "../contact";
import {IsBoolean, IsDefined, IsEmail, IsOptional, Length, Matches, ValidateNested} from "class-validator";
import {Type} from "class-transformer";

export class CustomerDTO {
    @IsDefined()
    @Length(2, 50)
    name: string;

    @IsOptional()
    @Length(2, 50)
    attn?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDTO)
    address?: AddressModel;

    @IsOptional()
    @Matches(/^\+\d{5,15}$/, {message: "phone number needs to be in international format"})
    mobilePhone?: string;

    @IsOptional()
    @Matches(/^\+\d{5,15}$/, {message: "phone number needs to be in international format"})
    businessPhone?: string;

    @IsOptional()
    @Matches(/^\+\d{5,15}$/, {message: "phone number needs to be in international format"})
    fax?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @Length(5, 50)
    webpage?: string;

    @IsOptional()
    @Length(2, 50)
    salesTech?: string;

    @IsOptional()
    @Length(2, 255)
    notes?: string;

    @IsOptional()
    @IsBoolean()
    active?: boolean;
}
