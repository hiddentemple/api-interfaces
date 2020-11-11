import {AddressModel, EmailModel, PhoneModel, WebpageModel} from "../contact";

export interface CustomerModel {
    id: string;
    name: string;
    attn?: string;
    address?: AddressModel;
    phones?: PhoneModel[];
    email?: EmailModel;
    webpage?: WebpageModel;
    salesTech?: string;
    notes?: string;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
