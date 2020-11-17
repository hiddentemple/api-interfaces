import {CustomerModel} from "./customer.model";
import {InvoiceModel} from "./invoice.model";
import {PaymentModel} from "./payment.model";
import {IsAlphanumeric, IsDefined, IsOptional, Length, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {PaymentDTO} from "./payment.dto";
import {AccountModel} from "./account.model";
import {CustomerDTO} from "./customer.dto";

export class AbstractAccountRequest {
    @IsDefined()
    @ValidateNested()
    @Type(() => AbstractInnerAccountRequest)
    account: AbstractInnerAccountRequest;
}

export class AbstractInnerAccountRequest {
    @IsOptional()
    @IsAlphanumeric()
    acctNumber: string;
    
    @IsOptional()
    @ValidateNested({each: true})
    invoices?: InvoiceModel[];

    @IsOptional()
    @ValidateNested()
    @Type(() => PaymentDTO)
    paymentInfo?: PaymentModel;

    @IsOptional()
    @Length(2, 255)
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
