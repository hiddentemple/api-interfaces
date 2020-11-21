import {WithPrimaryModel} from "../core";

export enum AddressCategory {
    HOME = 'Home',
    BUSINESS = 'Business',
    OTHER = 'Other'
}

export interface AddressModel extends WithPrimaryModel {
    id?: string;
    street: string;
    street2?: string;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
    category: AddressCategory;
}
