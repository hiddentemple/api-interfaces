import {IsDefined, IsEnum, Matches} from "class-validator";
import {WithPrimary} from "../core/with-primary";
import {PhoneCategory, PhoneModel} from "./phone.model";

export class PhoneDTO extends WithPrimary implements PhoneModel {
    @IsDefined()
    @Matches(/^\+\d{5,15}$/, {message: "phone number needs to be in international format"})
    phoneNumber: string

    @IsDefined()
    @IsEnum(PhoneCategory)
    category: PhoneCategory;
}
