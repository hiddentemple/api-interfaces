import {PhoneModel} from "./phone.model";
import {EmailModel} from "./email.model";

export interface ContactModel {
    id: string;
    firstName: string;
    lastName: string;
    updatedAt: Date;
    createdAt: Date;
    company?: string;
    notes?: string;
    jobTitle?: string;
    department?: string;
    organization?: string;
    gender?: string;

    phones?: PhoneModel[];
    emails?: EmailModel[];
}
