import {WithPrimaryModel} from "../core";
import {Categorized} from "../core/categorized";

export enum AddressCategory {
    HOME = 'Home',
    BUSINESS = 'Business',
    OTHER = 'Other'
}

export interface AddressModel extends Categorized {
    id?: string;

    street: string;
    street2?: string;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
    category: AddressCategory;
}
