import {IsDefined, IsEmail, IsOptional, IsUUID, ValidateNested} from "class-validator";
import {CategorizedDTO} from "../core";
import {EmailModel} from "./email.model";

export class EmailDTO extends CategorizedDTO {
    @IsDefined()
    @IsEmail()
    address: string
}
