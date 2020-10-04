import {ContactModel} from '../models/contact.model';


export interface FindOneContactRequest {
    id: string;
}

export interface FindOneContactResponse {
  contact: ContactModel;
}
