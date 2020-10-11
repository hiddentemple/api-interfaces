import {ContactModel} from '../models/contact.model';


export interface GetOneContactRequest {
    id: string;
}

export interface GetOneContactResponse {
  contact: ContactModel;
}
