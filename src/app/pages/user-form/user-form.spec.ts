import { FormControl } from '@angular/forms';
import {emailValidator} from './CustomValidators';

describe('Custom Validation Specs', () => {
    it ('Should pass the email validation.', () => {
        const formControl = new FormControl();
        formControl.setValue('email@gmail.com');
        const result = emailValidator(formControl);
        expect(result).toBe(undefined);
    });

    it ('Should fail the email validation.', () => {
        const formControl = new FormControl();
        formControl.setValue('email@.com' );
        const result = emailValidator(formControl);
        expect(result['invalidEmail']).toBe(true);
    });
});