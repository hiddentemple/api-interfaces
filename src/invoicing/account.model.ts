import {InvoiceModel} from "./invoice.model";
import {PaymentModel} from "./payment.model";

export interface AccountModel {
    id?: string;
    name: string;
    acctNumber?: string;
    notes?: string;
    paymentInfo?: PaymentModel;
    invoices?: InvoiceModel[];
    updatedAt?: Date;
    createdAt?: Date;
}
