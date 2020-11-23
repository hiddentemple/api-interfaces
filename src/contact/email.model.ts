import {WithPrimaryModel} from "../core";
import {Categorized} from "../core/categorized";

export enum EmailCategory {
    PERSONAL = "Personal",
    WORK = "Work",
    OTHER = "Other"
}

export interface EmailModel extends WithPrimaryModel, Categorized {
    id?: string;
    address: string;
    category: EmailCategory;
}
