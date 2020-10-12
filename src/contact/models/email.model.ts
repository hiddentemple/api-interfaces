import {ContactModel} from "./contact.model";
import {CategoryModel, HasCategory} from "../../core";


export interface EmailModel extends HasCategory {
    id: string;
    address: string;
    contact?: ContactModel;
}
