import {BillerModel} from "./biller.model";
import {CustomerModel} from "./customer.model";
import {LineItemModel} from "./line-item.model";
import {
    IsBoolean,
    IsDateString,
    IsDefined,
    IsEnum,
    IsNumber,
    IsOptional,
    Length,
    ValidateNested
} from "class-validator";
import {Type} from "class-transformer";
import {LineItemDTO} from "./line-item.dto";
import {CustomerDTO} from "./customer.dto";
import {BillerDTO} from "./biller.dto";
import {InvoiceModel, InvoiceType} from "./invoice.model";


export class AbstractInvoiceRequest {
    @IsDefined()
    @ValidateNested()
    @Type(() => AbstractInnerInvoiceRequest)
    invoice: AbstractInnerInvoiceRequest;
}

export class AbstractInnerInvoiceRequest {

    @IsDefined()
    @IsDateString()
    date: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => BillerDTO)
    biller: BillerModel;

    @IsDefined()
    @IsEnum(InvoiceType)
    type: InvoiceType;

    @IsDefined()
    @Length(2, 255)
    invoiceNumber: string;

    @IsOptional()
    @Length(2, 255)
    technician?: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => CustomerDTO )
    customer: CustomerModel;

    @IsOptional()
    @Length(2, 255)
    notes?: string;

    @IsDefined()
    @ValidateNested({each: true})
    @Type(() => LineItemDTO)
    lineItems: LineItemModel[];

    @IsOptional()
    @IsNumber()
    subTotal?: number;

    @IsOptional()
    @IsNumber()
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
    
    @IsOptional()
    createdBy?: string;

    @IsOptional()
    updatedBy?: string;
}

class AbstractInvoiceResponse {
    invoice: InvoiceModel;
}

export class GetInvoiceResponse extends AbstractInvoiceResponse {}
export class GetAllInvoicesResponse { invoices: InvoiceModel[]; }

export class CreateInvoiceRequest extends AbstractInvoiceRequest {}
export class CreateInvoiceResponse extends AbstractInvoiceResponse {}

export class UpdateInvoiceRequest extends AbstractInvoiceRequest {}
export class UpdateInvoiceResponse extends AbstractInvoiceResponse {}


