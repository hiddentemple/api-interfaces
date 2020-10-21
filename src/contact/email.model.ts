import {ContactModel} from "./contact.model";
import {CategoryModel, Categorized} from "../core";


export interface EmailModel extends Categorized {
    id: string;
    address: string;
}
