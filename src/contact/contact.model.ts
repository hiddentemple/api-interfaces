import {PhoneModel} from "./phone.model";
import {EmailModel} from "./email.model";
import {AddressModel} from "./address.model";
import {WebpageModel} from "./webpage.model";

export interface ContactModel {
    id: string;
    firstName: string;
    lastName: string;
    nickName?: string;
    anniversary?: string;
    birthday?: string;
    gender?: string;

    jobTitle?: string;
    department?: string;
    company?: string;
    organization?: string;

    emails?: EmailModel[];
    phones?: PhoneModel[];
    addresses?: AddressModel[];
    notes?: string;
    webpages?: WebpageModel[];
    tags?: string[];
    updatedAt: Date;
    createdAt: Date;
}
