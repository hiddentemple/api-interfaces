import {IsDefined, Matches, IsEnum, IsNumberString, IsOptional, IsPhoneNumber, IsUUID, Length} from "class-validator";
import {CategorizedDTO, PhoneEmailCategory} from "../core/category";
import {Type} from "class-transformer";

export class PhoneDTO extends CategorizedDTO {
    @IsDefined()
    @Matches(/^\+\d{5,15}$/, {message: "phone number needs to be in international format"})
    phoneNumber: string
}
