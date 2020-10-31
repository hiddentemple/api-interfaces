import {IsDefined, IsEnum, Length} from "class-validator";
import  {urlType} from "./webpage.model";

export class WebpageDTO {
    @IsDefined()
    @Length(5, 50)
    url: string

    @IsDefined()
    @IsEnum(urlType)
    type: urlType;

}
