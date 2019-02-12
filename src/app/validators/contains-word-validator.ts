import { Directive, forwardRef } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[containsword]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => ContainsWordValidator),
            multi: true
        }
    ]
})
export class ContainsWordValidator {
    validate(control) {
       const description = control.value;
       const name = control.root.controls.name.value;

       if(description && name) {
        if(description.split(' ')
                        .filter(word => word.includes(name))
                        .length == 0) {
                            return {
                                containsword: {
                                    actualValue: description,
                                    error: `"${description}" does not contain a word from "${name}"`
                                }
                            }
                        }
       }
       
    return null;
    }
}