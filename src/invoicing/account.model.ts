import {CustomerModel} from "./customer.model";
import {InvoiceModel} from "./invoice.model";
import {PaymentModel} from "./payment.model";

export interface AccountModel {
    id: string;
    acctNumber?: string;
    invoices?: InvoiceModel[];
    paymentInfo?: PaymentModel;
    notes?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
