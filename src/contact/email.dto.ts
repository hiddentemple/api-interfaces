import {IsDefined, IsEmail, IsOptional, IsUUID, ValidateNested} from "class-validator";
import {AbstractInnerCategoryRequest} from "../core";
import {EmailModel} from "./email.model";

export class EmailDTO {
    @IsDefined()
    @IsEmail()
    address: string

    @IsDefined()
    @IsUUID()
    categoryId: string;
}
