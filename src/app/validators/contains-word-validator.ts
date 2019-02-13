import { Directive, forwardRef, Input } from "@angular/core";
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

  @Input() containsword;

    validate(control) {
       const description = control.value;
       const name = control.root.controls[this.containsword].value;

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
