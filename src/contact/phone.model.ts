import {WithPrimaryModel} from "../core";
import {Categorized} from "../core/categorized";

export enum PhoneCategory {
    PERSONAL = "Personal",
    HOME = "Home",
    MOBILE = "Mobile",
    WORK = "Work",
    BUSINESS_FAX = "Business Fax",
    HOME_FAX = "Home Fax",
    OTHER = "Other"
}

export interface PhoneModel extends WithPrimaryModel, Categorized {
    id?: string;
    phoneNumber: string;
    category: PhoneCategory;
}
