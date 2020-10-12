import {CategoryCode, CategoryModel} from "./category.model";
import {IsDefined, Length} from "class-validator";

export class AbstractCategoryRequest {
    @IsDefined()
    category: AbstractInnerCategoryRequest;
}

export class AbstractInnerCategoryRequest {
    @IsDefined()
    code: CategoryCode;

    @IsDefined()
    @Length(4, 25)
    description: string;
}

export class AbstractCategoryResponse {
    category: CategoryModel
}

export class CreateCategoryRequest extends AbstractCategoryRequest {}
export class CreateCategoryResponse extends AbstractCategoryResponse {}

export class GetCategoryResponse extends AbstractCategoryResponse {}
export class GetPrimaryCategoryResponse extends AbstractCategoryResponse {}
export class GetAllCategoriesResponse { categories: CategoryModel[] }

export class UpdateCategoryRequest {
    @IsDefined()
    description: string
}
export class UpdateCategoryResponse extends AbstractCategoryResponse {}
