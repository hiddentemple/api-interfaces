import {IsDefined, Length} from "class-validator";

export class PaymentDTO{
    @IsDefined()
    @Length(2, 50)
    name: string;
    
    @IsDefined()
    @Length(2, 50)
    method: string;
}

