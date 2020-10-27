import {IsAlpha, IsDefined, IsNumber, IsNumberString, IsOptional, Length} from "class-validator";

export class AddressDTO {

    @IsDefined()
    @Length(5, 50)
    street: string;

    @IsOptional()
    @Length(2, 50)
    street2: string

    @IsDefined()
    @Length(2, 25)
    @IsAlpha()
    city: string;

    @IsDefined()
    @Length(2, 50)
    @IsAlpha()
    state: string;

    @IsDefined()
    @Length(5, 10)
    @IsNumberString()
    postalCode: string;

    @IsOptional()
    @Length(2, 50)
    @IsAlpha()
    country: string;
}
