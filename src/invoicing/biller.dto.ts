import {AddressDTO, AddressModel, EmailDTO, EmailModel, PhoneDTO, PhoneModel} from "../contact";
import {PaymentModel} from "./payment.model";
import {IsBoolean, IsDefined, IsOptional, Length, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {PaymentDTO} from "./payment.dto";

export class BillerDTO {
    @IsDefined()
    @Length(2, 50)
    name: string;

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
    @Type(() => PaymentDTO)
    paymentInfo?: PaymentModel;

    @IsOptional()
    @Length(2, 50)
    invoiceFooter?: string;

    @IsOptional()
    @Length(2, 50)
    notes?: string;

    @IsOptional()
    @IsBoolean()
    active?: boolean;
}
