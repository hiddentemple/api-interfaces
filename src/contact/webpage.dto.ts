import {IsBoolean, IsDefined, IsEnum, Length} from "class-validator";
import {URLCategory, WebpageModel} from "./webpage.model";
import {WithPrimary} from "../core";

export class WebpageDTO extends WithPrimary implements WebpageModel {
    @IsDefined()
    @Length(5, 50)
    url: string

    @IsDefined()
    @IsEnum(URLCategory)
    category: URLCategory;
}
