import {CustomerModel} from "./customer.model";
import {InvoiceModel} from "./invoice.model";
import {PaymentModel} from "./payment.model";
import {IsAlphanumeric, IsDefined, IsOptional, Length, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {InvoiceDTO} from "../../dist/invoicing/invoice.dto";
import {PaymentDTO} from "./payment.dto";
import {AccountModel} from "./account.model";
import {CustomerDTO} from "./customer.dto";

export class AbstractAccountRequest {
    @IsDefined()
    @ValidateNested()
    @Type(() => AbstractAccountRequest)
    account: AbstractAccountRequest;
}

export class AbstractInnerAccountRequest {
    @IsOptional()
    @IsAlphanumeric()
    acctNumber: string;
    
    @IsDefined()
    @ValidateNested()
    @Type(() => CustomerDTO)
    customer: CustomerModel;

    @IsOptional()
    @ValidateNested({each: true})
    @Type(() => InvoiceDTO)
    invoices?: InvoiceModel[];

    @IsOptional()
    @ValidateNested()
    @Type(() => PaymentDTO)
    paymentInfo?: PaymentModel;

    @IsOptional()
    @Length(2, 50)
    notes?: string;
}

class AbstractAccountResponse {
    account: AccountModel;
}

export class GetAccountResponse extends AbstractAccountResponse {}
export class GetAllAccountResponse { accounts: AccountModel[]; }

export class CreateAccountRequest extends AbstractAccountRequest {}
export class CreateAccountResponse extends AbstractAccountResponse {}

export class UpdateAccountRequest extends AbstractAccountRequest {}
export class UpdateAccountResponse extends AbstractAccountResponse {}
