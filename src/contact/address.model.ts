export enum AddressType {
    HOME = 'Home',
    BUSINESS = 'Business',
    OTHER = 'Other'
}

export interface AddressModel{
    street: string;
    street2?: string;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
    type: AddressType;
}
