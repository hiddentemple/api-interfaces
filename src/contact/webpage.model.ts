export enum urlType {
    PERSONAL = 'Personal',
    BUSINESS = 'Business',
    COMMERCE = 'Commerce'
}

export interface WebpageModel{
    url: string;
    type: urlType;
}
