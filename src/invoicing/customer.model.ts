import {AddressModel, EmailModel, PhoneModel, WebpageModel} from "../contact";

export interface CustomerModel {
    id: string;
    name: string;
    attn?: string;
    address?: AddressModel;
    mobilePhone?: string;
    businessPhone?: string;
    fax?: string;
    email?: string;
    webpage?: string;
    salesTech?: string;
    notes?: string;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
