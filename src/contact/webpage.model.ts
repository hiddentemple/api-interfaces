import {Categorized} from "../core/categorized";

export enum WebpageCategory {
    PERSONAL = 'Personal',
    BUSINESS = 'Business',
    OTHER = 'Other'
}

export interface WebpageModel extends Categorized {
    id?: string;
    url: string;
    category: WebpageCategory;
}
