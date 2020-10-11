import {ContactModel} from "./contact.model";
import {CategoryModel} from "../../core";


export interface PhoneModel {
    id: string;
    number: number;
    category: CategoryModel;
    contact?: ContactModel;
}
