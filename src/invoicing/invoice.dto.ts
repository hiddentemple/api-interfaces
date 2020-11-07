import {BillerModel} from "./biller.model";
import {CustomerModel} from "./customer.model";
import {LineItemModel} from "./line-item.model";
import {IsDefined, IsOptional, Length} from "class-validator";

export class InvoiceDTO {

    @IsDefined()
    @Length(2, 50)
    date: string;

    @IsDefined()
    @Length(2, 50)
    biller: BillerModel;

    @IsDefined()
    @Length(2, 50)
    invoiceNumber: string;

    @IsOptional()
    @Length(2, 50)
    technician?: string;

    @IsDefined()
    @Length(2, 50)
    customer: CustomerModel;

    @IsOptional()
    @Length(2, 50)
    notes?: string;

    @IsDefined()
    @Length(2, 50)
    lineItems: LineItemModel[];

    @IsOptional()
    @Length(2, 50)
    subTotal?: number;

    @IsOptional()
    @Length(2, 50)
    tax?: number;

    @IsOptional()
    @Length(2, 50)
    total?: number;

    @IsOptional()
    @Length(2, 50)
    amountOwed?: number;

    @IsOptional()
    @Length(2, 50)
    amountPaid?: number;

    @IsOptional()
    @Length(2, 50)
    paidInFull?: boolean;

    @IsOptional()
    @Length(2, 50)
    createdAt?: Date;

    @IsOptional()
    @Length(2, 50)
    createdBy?: string;

    @IsOptional()
    @Length(2, 50)
    updatedAt?: Date;

    @IsOptional()
    @Length(2, 50)
    updatedBy?: string;
}
