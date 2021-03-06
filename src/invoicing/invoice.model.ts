import {CustomerModel} from "./customer.model";
import {LineItemModel} from "./line-item.model";
import {BillerModel} from "./biller.model";

export enum InvoiceType {
    INVOICE = 'Invoice',
    QUOTE = 'Quote',
    ESTIMATE = 'Estimate'
}

export interface InvoiceModel {
    id: string;
    date: string;
    type: InvoiceType;
    biller: BillerModel;
    invoiceNumber: string;
    technician?: string;
    customer: CustomerModel;
    lineItems: LineItemModel[];
    notes?: string;
    subTotal?: number;
    tax?: number;
    total?: number;
    amountOwed?: number;
    amountPaid?: number;
    paidInFull?: boolean;
    createdAt?: Date;
    createdBy?: string;
    updatedAt?: Date;
    updatedBy?: string;
}
