import { EmailModel } from '../models/email.model';
import { PhoneModel } from '../models/phone.model';
import { ContactModel } from '../models/contact.model';
import {CreateContactResponse} from "./create.contact";

// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
export type UpdateContactRequest = Partial<ContactModel>;

export interface UpdateContactResponse extends CreateContactResponse {

}
