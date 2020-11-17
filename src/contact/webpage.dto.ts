import {IsDefined, IsEnum, Length} from "class-validator";
import  {urlType} from "./webpage.model";

export class WebpageDTO {
    @IsDefined()
    @Length(5, 255)
    url: string

    @IsDefined()
    @IsEnum(urlType)
    type: urlType;

}
