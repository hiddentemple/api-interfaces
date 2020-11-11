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
import {IsBoolean, IsDefined, IsOptional, Length, ValidateNested} from "class-validator";
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
    @ValidateNested()
    @Type(() => PhoneDTO)
    mobilePhone?: PhoneModel;

    @IsOptional()
    @ValidateNested()
    @Type(() => PhoneDTO)
    businessPhone?: PhoneModel;

    @IsOptional()
    @ValidateNested()
    @Type(() => PhoneDTO)
    fax?: PhoneModel;

    @IsOptional()
    @ValidateNested()
    @Type(() => EmailDTO)
    email?: EmailModel;

    @IsOptional()
    @ValidateNested()
    @Type(() => WebpageDTO)
    webpage?: WebpageModel;

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
