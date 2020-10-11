import {ContactModel} from "./contact.model";
import {CategoryModel} from "../../core/category.model";


export class EmailModel {
    id: string;
    address: string;
    category: CategoryModel;
    contact?: ContactModel;
}
