import {IsBoolean, IsDefined, IsEnum, Length} from "class-validator";
import {WebpageCategory, WebpageModel} from "./webpage.model";
import {WithPrimary} from "../core";

export class WebpageDTO implements WebpageModel {
    @IsDefined()
    @Length(5, 255)
    url: string

    @IsDefined()
    @IsEnum(WebpageCategory)
    category: WebpageCategory;
}
