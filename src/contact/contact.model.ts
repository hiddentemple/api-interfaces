import {PhoneModel} from "./phone.model";
import {EmailModel} from "./email.model";
import {AddressModel} from "./address.model";
import {WebpageModel} from "./webpage.model";

export interface ContactModel {
    id?: string;

    firstName: string;
    lastName: string;
    nickName?: string;
    gender?: string;

    // Expected to be valid ISO Date strings in adherence with class-validator IsDateString()
    anniversary?: string;
    birthday?: string;

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
    updatedAt?: Date;
    createdAt?: Date;
}
