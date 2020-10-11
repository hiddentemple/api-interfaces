import {ContactModel} from "./contact.model";
import {CategoryModel, HasCategory} from "../../core/category.model";


export interface EmailModel extends HasCategory{
    id: string;
    address: string;
    category: CategoryModel;
    contact?: ContactModel;
}
