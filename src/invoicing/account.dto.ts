import {CustomerModel} from "./customer.model";
import {InvoiceModel} from "./invoice.model";
import {PaymentModel} from "./payment.model";
import {IsDefined, IsOptional, Length} from "class-validator";

export class AccountDTO {
    @IsDefined()
    @Length(2, 50)
    customer: CustomerModel;

    @IsOptional()
    @Length(2, 50)
    invoices?: InvoiceModel[];

    @IsOptional()
    @Length(2, 50)
    paymentInfo?: PaymentModel;

    @IsOptional()
    @Length(2, 50)
    notes?: string;

    @IsOptional()
    @Length(2, 50)
    createdAt?: Date;

    @IsOptional()
    @Length(2, 50)
    updatedAt?: Date;
}
