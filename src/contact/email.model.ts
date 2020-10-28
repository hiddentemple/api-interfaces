import {ContactModel} from "./contact.model";
import {CategorizedModel} from "../core";


export interface EmailModel extends CategorizedModel {
    id: string;
    address: string;
}
