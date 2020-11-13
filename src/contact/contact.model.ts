import {PhoneModel} from "./phone.model";
import {EmailModel} from "./email.model";
import {AddressModel} from "./address.model";
import {WebpageModel} from "./webpage.model";

export interface ContactModel {
    id: string;
    firstName: string;
    lastName: string;
    nickName?: string;
    emails?: EmailModel[];
    phones?: PhoneModel[];
    addresses?: AddressModel[];
    jobTitle?: string;
    department?: string;
    company?: string;
    organization?: string;
    notes?: string;
    birthday?: string;
    anniversary?: string;
    gender?: string;
    webpages?: WebpageModel[];
    tags?: string[];
    updatedAt: Date;
    createdAt: Date;
}
