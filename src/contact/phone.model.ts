import {ContactModel} from "./contact.model";
import {WithPrimaryModel} from "../core";

export enum PhoneCategory {
    PRIMARY = "Primary",
    PERSONAL = "Personal",
    WORK = "Work",
    FAX = "Fax",
    OTHER = "Other"
}

export interface PhoneModel extends WithPrimaryModel {
    id?: string;
    phoneNumber: string;
    category: PhoneCategory;
}
