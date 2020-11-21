import {IsDefined, Matches, IsEnum, IsNumberString, IsOptional, IsPhoneNumber, IsUUID, Length} from "class-validator";
import {WithPrimary} from "../core/with-primary";
import {Type} from "class-transformer";
import {PhoneCategory, PhoneModel} from "./phone.model";

export class PhoneDTO extends WithPrimary implements PhoneModel {
    @IsDefined()
    @Matches(/^\+\d{5,15}$/, {message: "phone number needs to be in international format"})
    phoneNumber: string

    @IsDefined()
    @IsEnum(PhoneCategory)
    category: PhoneCategory;
}
