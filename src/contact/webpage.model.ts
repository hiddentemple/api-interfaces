export enum urlType {
    PERSONAL = 'personal',
    BUSINESS = 'business',
    COMMERCE = 'commerce'
}

export interface WebpageModel{
    url: string;
    type: urlType;
}
