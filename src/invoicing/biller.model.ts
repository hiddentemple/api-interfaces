import {AddressModel} from "../contact";
import {PaymentModel} from "./payment.model";

export interface BillerModel {
    id: string;
    name: string;
    address: AddressModel;
    mobilePhone?: string;
    businessPhone?: string;
    fax?: string;
    email?: string;
    paymentInfo?: PaymentModel;
    invoiceFooter?: string;
    notes?: string;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
