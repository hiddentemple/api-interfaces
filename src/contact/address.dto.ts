import {IsDefined, IsEnum, IsNumberString, IsOptional, Length} from "class-validator";
import {AddressCategory, AddressModel} from "./address.model";

export class AddressDTO implements AddressModel {

    @IsDefined()
    @Length(5, 255)
    street: string;

    @IsOptional()
    @Length(2, 255)
    street2?: string

    @IsDefined()
    @Length(2, 25)
    city: string;

    @IsDefined()
    @Length(2, 255)
    state: string;

    @IsDefined()
    @Length(5, 10)
    @IsNumberString()
    postalCode: string;

    @IsOptional()
    @Length(2, 255)
    country?: string;

    @IsDefined()
    @IsEnum(AddressCategory)
    category: AddressCategory;
}
