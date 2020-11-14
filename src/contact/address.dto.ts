import {IsAlpha, IsDefined, IsEnum, IsNumberString, IsOptional, Length} from "class-validator";
import {AddressType} from "./address.model";

export class AddressDTO {

    @IsDefined()
    @Length(5, 50)
    street: string;

    @IsOptional()
    @Length(2, 50)
    street2?: string

    @IsDefined()
    @Length(2, 25)
    city: string;

    @IsDefined()
    @Length(2, 50)
    state: string;

    @IsDefined()
    @Length(5, 10)
    @IsNumberString()
    postalCode: string;

    @IsOptional()
    @Length(2, 50)
    country?: string;

    @IsDefined()
    @IsEnum(AddressType)
    type: AddressType;
}
