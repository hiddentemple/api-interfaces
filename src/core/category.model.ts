export enum CategoryCode { PRIMARY="PRMY", USER = "USER" }

export const CategoryCodeStrings = { literals: [CategoryCode.USER.valueOf(), CategoryCode.PRIMARY.valueOf()] }

export interface CategoryDTO {
    code: string;
    description: string;
}

export interface CategoryModel {
    code: CategoryCode, description: string
}

export function isPrimary<T extends CategoryModel>(model: T): boolean {
    return model.code === CategoryCode.PRIMARY.valueOf();
}

export function getPrimary<T extends CategoryModel>(models: T[]): T | undefined {
    return models.find(isPrimary);
}

export function containsExactlyOnePrimary<T extends CategoryModel>(models: T[]): boolean | { error: string } {
    const filtered: T[] = models.filter(isPrimary)
    if (filtered.length == 1) { return true; }
    else if (filtered.length <= 0 ) { return { error: "Does not contain any primary categories" }}
    else { return { error: "Contains more than one primary category" } }
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