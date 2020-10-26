import {ContactModel} from "./contact.model";
import {CategorizedDTO, CategorizedModel} from "../core";

export interface PhoneModel extends CategorizedModel {
    id: string;
    phoneNumber: string;
}
