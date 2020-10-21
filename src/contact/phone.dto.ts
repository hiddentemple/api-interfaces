import {IsDefined, IsNumberString, IsOptional, IsPhoneNumber, IsUUID, Length} from "class-validator";

export class PhoneDTO {
    @IsDefined()
    @IsNumberString( { no_symbols: true })
    @Length(10, 10, {message: 'Phone number must be exactly 10 digits'})
    @IsPhoneNumber('US')
    phoneNumber: string

    @IsDefined()
    @IsUUID()
    categoryId: string;
}
