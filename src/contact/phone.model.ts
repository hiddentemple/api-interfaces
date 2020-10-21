import {ContactModel} from "./contact.model";
import {CategoryModel, Categorized} from "../core";

export interface PhoneModel extends Categorized {
    id: string;
    phoneNumber: string;
}
