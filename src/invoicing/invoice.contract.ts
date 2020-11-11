import {BillerModel} from "./biller.model";
import {CustomerModel} from "./customer.model";
import {LineItemModel} from "./line-item.model";
import {IsBoolean, IsDate, IsDecimal, IsDefined, IsNumber, IsOptional, Length, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {LineItemDTO} from "./line-item.dto";
import {CustomerDTO} from "./customer.dto";
import {BillerDTO} from "./biller.dto";
import {InvoiceModel} from "./invoice.model";


export class AbstractInvoiceRequest {
    @IsDefined()
    @ValidateNested()
    @Type(() => AbstractInnerInvoiceRequest)
    invoice: AbstractInnerInvoiceRequest;
}

export class AbstractInnerInvoiceRequest {

    @IsDefined()
    @IsDate()
    date: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => BillerDTO)
    biller: BillerModel;

    @IsDefined()
    @Length(2, 50)
    invoiceNumber: string;

    @IsOptional()
    @Length(2, 50)
    technician?: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => CustomerDTO )
    customer: CustomerModel;

    @IsOptional()
    @Length(2, 50)
    notes?: string;

    @IsDefined()
    @ValidateNested({each: true})
    @Type(() => LineItemDTO)
    lineItems: LineItemModel[];

    @IsOptional()
    @Length(2, 50)
    subTotal?: number;

    @IsOptional()
    @IsDecimal()
    tax?: number;

    @IsOptional()
    @IsNumber()
    total?: number;

    @IsOptional()
    @IsNumber()
    amountOwed?: number;

    @IsOptional()
    @IsNumber()
    amountPaid?: number;

    @IsOptional()
    @IsBoolean()
    paidInFull?: boolean;
    
}

class AbstractInvoiceResponse {
    invoice: InvoiceModel;
}

export class GetInvoiceResponse extends AbstractInvoiceResponse {}
export class GetAllContactsResponse { invoices: InvoiceModel[]; }

export class CreateInvoiceRequest extends AbstractInvoiceRequest {}
export class CreateInvoiceResponse extends AbstractInvoiceResponse {}

export class UpdateInvoiceRequest extends AbstractInvoiceRequest {}
export class UpdateInvoiceResponse extends AbstractInvoiceResponse {}


