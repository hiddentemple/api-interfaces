export enum CategoryCode { PRIMARY="PRMY", USER = "USER" }

export interface CategoryModel {
    id: string,
    code: CategoryCode,
    description: string
}

export interface HasCategory {
    category: CategoryModel;
}

export function isPrimary<T extends Pick<CategoryModel, 'code'>>({code}: T): boolean {
    return code === CategoryCode.PRIMARY.valueOf();
}

export function getPrimary<T extends CategoryModel>(models: T[]): T | undefined {
    return models.find(isPrimary);
}

export function containsExactlyOnePrimary<T extends CategoryModel>(models: T[]): boolean {
    const filtered: T[] = models.filter(isPrimary)
    return filtered.length == 1
}

export function uniqueDescriptionReducer<T extends CategoryModel>(acc: string[], current: T)  {
    const desc: string = current.description;
    if (desc !== "" && !acc.includes(desc)) { acc.push(desc); }
    return acc;
}

export function getUniqueDescriptions<T extends CategoryModel>(models: T[]): string[] {
    const accumulator: string[] = [];
    return models.reduce(uniqueDescriptionReducer, accumulator);
}

export function hasPrimary<T extends CategoryModel>(models: T[]): boolean {
    return models.some(isPrimary);
}