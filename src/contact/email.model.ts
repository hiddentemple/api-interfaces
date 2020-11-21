import {ContactModel} from "./contact.model";
import {WithPrimaryModel} from "../core";

export enum EmailCategory {
    PRIMARY = "Primary",
    PERSONAL = "Personal",
    WORK = "Work",
    OTHER = "Other"
}

export interface EmailModel extends WithPrimaryModel {
    id?: string;
    address: string;
    category: EmailCategory;
}
