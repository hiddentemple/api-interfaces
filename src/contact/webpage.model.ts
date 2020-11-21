import {WithPrimaryModel} from "../core";

export enum URLCategory {
    PERSONAL = 'Personal',
    BUSINESS = 'Business',
    COMMERCE = 'Commerce'
}

export interface WebpageModel extends WithPrimaryModel {
    id?: string;
    url: string;
    category: URLCategory;
}
