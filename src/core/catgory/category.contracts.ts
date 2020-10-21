import {CategoryCode, CategoryModel} from "./category.model";
import {IsDefined, IsUUID, Length, MaxLength, ValidateNested} from "class-validator";
import {Type} from "class-transformer";

export class AbstractCategoryRequest {
    @IsDefined()
    @ValidateNested()
    @Type(() => AbstractInnerCategoryRequest)
    category: AbstractInnerCategoryRequest;
}

export class AbstractInnerCategoryRequest {
    @IsDefined()
    @Length(3, 25)
    description: string;
}

export class AbstractCategoryResponse {
    category: CategoryModel;
}

export class CreateCategoryRequest extends AbstractCategoryRequest {}
export class CreateCategoryResponse extends AbstractCategoryResponse {
    /**
     * true: created a new item
     * false: tried to create item that already existed, returned previous
     */
    wasCreated: boolean;
}

export class GetCategoryResponse extends AbstractCategoryResponse {}
export class GetPrimaryCategoryResponse extends AbstractCategoryResponse {}
export class GetAllCategoriesResponse { categories: CategoryModel[] }
