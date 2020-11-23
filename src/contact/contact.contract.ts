import {
    IsAlpha,
    IsDateString,
    IsDefined,
    IsISO8601,
    IsOptional,
    Length,
    Matches,
    Validate,
    ValidateNested
} from "class-validator";
import {Type} from "class-transformer";
import {ContactModel} from "./contact.model";
import {EmailDTO} from "./email.dto";
import {PhoneDTO} from "./phone.dto";
import {AddressDTO} from "./address.dto";
import {WebpageDTO} from "./webpage.dto";

export const NameRegex = /^[a-zA-z\-. ']+$/

export class AbstractContactRequest {
    @IsDefined()
    @ValidateNested()
    @Type(() => AbstractInnerContactRequest)
    contact: AbstractInnerContactRequest;
}

export class AbstractInnerContactRequest {
    @Matches(NameRegex, {
        message: "firstName must contain only alphabetic characters, spaces, periods, and '-'"
    })
    @Length(2, 255)
    @IsDefined()
    firstName: string;

    @Matches(NameRegex, {
        message: "lastName must contain only alphabetic characters, spaces, periods, and '-'"
    })
    @Length(2, 255)
    @IsDefined()
    lastName: string;

    @IsOptional()
    @Length(2, 255)
    nickName?: string;

    @IsOptional()
    @IsDateString()
    birthday?: string;

    @IsOptional()
    @IsDateString()
    anniversary?: string;

    @IsOptional()
    @Length(2, 255)
    gender?: string;

    @IsOptional()
    @Length(2, 255)
    jobTitle?: string;

    @IsOptional()
    @Length(2, 255)
    department?: string;

    @IsOptional()
    @Length(2, 255)
    company?: string

    @IsOptional()
    @Length(2, 255)
    organization?: string;

    @IsOptional()
    @ValidateNested({each: true})
    @Type(() => EmailDTO)
    emails?: EmailDTO[];

    @IsOptional()
    @ValidateNested({each: true})
    @Type(() => PhoneDTO)
    phones?: PhoneDTO[];

    @IsOptional()
    @ValidateNested({each: true})
    @Type( () => AddressDTO)
    addresses?: AddressDTO[];

    @IsOptional()
    notes?: string;

    @IsOptional()
    @ValidateNested({each: true})
    @Type(() => WebpageDTO)
    webpages?: WebpageDTO[];

    @IsOptional()
    @Length(2, 255, {each: true})
    tags?: string[];
}

class AbstractContactResponse {
    contact: ContactModel;
}

export class GetContactResponse extends AbstractContactResponse {}
export class GetAllContactsResponse { contacts: ContactModel[]; }

export class CreateContactRequest extends AbstractContactRequest {}
export class CreateContactResponse extends AbstractContactResponse {}

export class UpdateContactRequest extends AbstractContactRequest {}
export class UpdateContactResponse extends AbstractContactResponse {}

