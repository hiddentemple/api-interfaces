import {IsDefined, IsOptional, Length, Matches, Validate, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {ContactModel} from "./contact.model";
import {EmailDTO} from "./email.dto";
import {PhoneDTO} from "./phone.dto";

export const NameRegex = /^[a-zA-z-\.]+$/

export class AbstractContactRequest {
    @IsDefined()
    @ValidateNested()
    @Type(() => AbstractInnerContactRequest)
    contact: AbstractInnerContactRequest;
}

export class AbstractInnerContactRequest {
    @Matches(NameRegex, {message: "firstName must contain only alphabetic characters and '-'"})
    @Length(2, 50)
    @IsDefined()
    firstName: string;

    @Matches(NameRegex, {message: "lastName must contain only alphabetic characters and '-'"})
    @Length(2, 50)
    @IsDefined()
    lastName: string;

    @IsOptional()
    @Length(2, 50)
    company?: string

    @IsOptional()
    notes?: string

    @IsOptional()
    @Length(2, 50)
    jobTitle?: string;

    @IsOptional()
    @Length(2, 50)
    department?: string;

    @IsOptional()
    @Length(2, 50)
    organization?: string;

    @IsOptional()
    @Length(2, 50)
    gender?: string;

    @IsOptional()
    @ValidateNested({each: true})
    @Type(() => EmailDTO)
    emails: EmailDTO[];

    @IsOptional()
    @ValidateNested({each: true})
    @Type(() => PhoneDTO)
    phones: PhoneDTO[];
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

