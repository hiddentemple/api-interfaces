import {IsDefined, IsEnum, IsNumberString, IsOptional, IsPhoneNumber, IsUUID, Length} from "class-validator";
import {CategorizedDTO, PhoneEmailCategory} from "../core/category";
import {Type} from "class-transformer";

export class PhoneDTO extends CategorizedDTO {
    @IsDefined()
    @IsNumberString( { no_symbols: true })
    @Length(10, 10, {message: 'Phone number must be exactly 10 digits'})
    @IsPhoneNumber('US')
    phoneNumber: string
}
