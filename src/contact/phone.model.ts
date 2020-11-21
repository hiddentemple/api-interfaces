import {ContactModel} from "./contact.model";
import {WithPrimaryModel} from "../core";
import {Categorized} from "../core/categorized";

export enum PhoneCategory {
    PERSONAL = "Personal",
    WORK = "Work",
    FAX = "Fax",
    OTHER = "Other"
}

export interface PhoneModel extends WithPrimaryModel, Categorized {
    id?: string;
    phoneNumber: string;
    category: PhoneCategory;
}
