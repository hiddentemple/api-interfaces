import {IsDefined, Length} from "class-validator";

export class PaymentDTO{
    @IsDefined()
    @Length(2, 255)
    name: string;
    
    @IsDefined()
    @Length(2, 255)
    method: string;
}

