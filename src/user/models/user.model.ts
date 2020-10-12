import {UserTypeModel} from "./user-type.model";
import {ContactModel} from "../../contact";


export interface UserModel {
    id?: string
    email?: string;
    userType?: UserTypeModel
    contact?: ContactModel
}
