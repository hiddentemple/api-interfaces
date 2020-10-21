export enum CategoryCode { PRIMARY="PRMY", USER = "USER" } // eventually: default

export interface CategoryModel {
    id: string;
    code: CategoryCode;
    description: string;
}

export interface Categorized {
    category: CategoryModel;
}

export function isPrimary({code}: CategoryModel): boolean {
    return code === CategoryCode.PRIMARY.valueOf();
}

export function getPrimary(models: CategoryModel[]): CategoryModel | undefined {
    return models.find(isPrimary);
}

export function containsExactlyOnePrimary(models: CategoryModel[]): boolean {
    const filtered: CategoryModel[] = models.filter(isPrimary);
    return filtered.length == 1;
}

export function uniqueDescriptionReducer(acc: string[], current: CategoryModel)  {
    const desc: string = current.description;
    if (desc !== "" && !acc.includes(desc)) { acc.push(desc); }
    return acc;
}

export function getUniqueDescriptions(models: CategoryModel[]): string[] {
    const accumulator: string[] = [];
    return models.reduce(uniqueDescriptionReducer, accumulator);
}

