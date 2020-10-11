import { EmailModel } from '../models/email.model';
import { PhoneModel } from '../models/phone.model';
import { ContactModel } from '../models/contact.model';


export type CreateContactRequest = Omit<ContactModel, "id">;

export interface CreateContactResponse {
  contact: ContactModel
}
