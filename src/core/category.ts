import {IsDefined, IsEnum} from "class-validator";

export enum PhoneEmailCategory {
    PRIMARY = "Primary",
    PERSONAL = "Personal",
    WORK = "Work",
    FAX = "Fax",
    OTHER = "Other"
}

export class CategorizedDTO {
    @IsDefined()
    @IsEnum(PhoneEmailCategory)
    category: PhoneEmailCategory;
}

export interface CategorizedModel {
    category: PhoneEmailCategory;
}