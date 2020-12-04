import {InvoiceModel} from "./invoice.model";
import {PaymentModel} from "./payment.model";

export interface AccountModel {
    id: string;
    acctNumber?: string;
    name: string;
    invoices?: InvoiceModel[];
    paymentInfo?: PaymentModel;
    notes?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
