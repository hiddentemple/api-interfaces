import {ContactModel} from "../models/contact.model";

export type GetAllContactRequest = {}

export interface GetAllContactResponse {
    contacts: ContactModel[];
}
