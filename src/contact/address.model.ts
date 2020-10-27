export enum addressEnum {
    HOME = "Home",
    BUSINESS = "Business"
}

type enumKeys = keyof typeof addressEnum

export interface AddressModel{
    street: string;
    street2?: string;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
    [type: number]: string;
}
