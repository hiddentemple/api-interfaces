import {AddressDTO, AddressModel, EmailDTO, EmailModel, PhoneDTO, PhoneModel} from "../contact";
import {PaymentModel} from "./payment.model";
import {IsBoolean, IsDefined, IsEmail, IsOptional, Length, Matches, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {PaymentDTO} from "./payment.dto";

export class BillerDTO {
    @IsDefined()
    @Length(2, 255)
    name: string;

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
    @ValidateNested()
    @Type(() => PaymentDTO)
    paymentInfo?: PaymentModel;

    @IsOptional()
    @Length(2, 255)
    invoiceFooter?: string;

    @IsOptional()
    @Length(2, 255)
    notes?: string;

    @IsOptional()
    @IsBoolean()
    active?: boolean;
}
