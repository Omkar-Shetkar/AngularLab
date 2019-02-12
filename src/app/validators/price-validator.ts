import { Directive, forwardRef } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[validateprice]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => PriceValidator),
            multi: true
        }
    ]
})
export class PriceValidator {
    validate(control) {
       
        const price = parseFloat(control.value);
        
        let error = undefined;

        if(isNaN(price)) {
            error = 'Please enter a number';
        } else {
            if(price <=0) {
                error = 'Price must be greater than 0';
            }
        }
        if(error) {
            return {
                validateprice: {
                    actualValue: price,
                    error: error
                }
            };
        }
    return null;
    }
}