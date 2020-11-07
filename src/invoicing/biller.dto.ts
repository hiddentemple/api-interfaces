import {AddressModel, EmailModel, PhoneModel} from "../contact";
import {PaymentModel} from "./payment.model";
import {IsBoolean, IsDefined, IsOptional, Length} from "class-validator";

export class BillerDTO {
    @IsDefined()
    @Length(2, 50)
    name: string;

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
    paymentInfo?: PaymentModel;

    @IsOptional()
    @Length(2, 50)
    invoiceFooter?: string;

    @IsOptional()
    @Length(2, 50)
    notes?: string;

    @IsOptional()
    @IsBoolean()
    @Length(2, 50)
    active?: boolean;

    @IsOptional()
    @Length(2, 50)
    createdAt?: Date;

    @IsOptional()
    @Length(2, 50)
    updatedAt?: Date;
}
