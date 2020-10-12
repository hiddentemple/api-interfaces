import {ContactModel} from "./contact.model";
import {CategoryModel, HasCategory} from "../../core";


export interface PhoneModel extends HasCategory {
    id: string;
    phoneNumber: string;
    contact?: ContactModel;
}
