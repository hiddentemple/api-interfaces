import {AddressModel, EmailModel, PhoneModel} from "../contact";
import {PaymentModel} from "./payment.model";

export interface BillerModel {
    id: string;
    name: string;
    address: AddressModel;
    mobilePhone?: PhoneModel;
    businessPhone?: PhoneModel;
    fax?: PhoneModel;
    email?: EmailModel;
    paymentInfo?: PaymentModel;
    invoiceFooter?: string;
    notes?: string;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
