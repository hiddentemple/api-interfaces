import {IsBoolean, IsDefined} from "class-validator";

export class WithPrimary implements WithPrimaryModel {
    @IsDefined()
    @IsBoolean()
    isPrimary: boolean;
}

export interface WithPrimaryModel {
    isPrimary: boolean;
}
