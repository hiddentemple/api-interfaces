import {ContactModel} from "./contact.model";
import {CategoryModel} from "../../core";


export interface PhoneModel {
    id: string;
    phoneNumber: string;
    category: CategoryModel;
    contact?: ContactModel;
}
