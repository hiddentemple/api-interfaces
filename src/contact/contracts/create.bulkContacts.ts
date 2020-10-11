import {ContactModel} from '../models/contact.model';
import {CreateContactRequest, CreateContactResponse} from "./create.contact";


export interface CreateBulkContactRequest {
  contacts: CreateContactRequest[];
}


export interface CreateBulkContactResponse {
  contacts: CreateContactResponse[];
}
