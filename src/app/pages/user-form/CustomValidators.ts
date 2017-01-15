import { FormGroup, FormControl } from '@angular/forms';

export function emailValidator(control: FormControl) {
    const emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value && !emailRegexp.test(control.value)) {
        return {
            invalidEmail: true
        };
    }
}

export function confirmPasswordValidator(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];
        if(group.controls[confirmPasswordKey].hasError('required') || group.controls[confirmPasswordKey].hasError('minlength')){
            return;
        }
        if (password.value !== confirmPassword.value) {
            return {
                passwordMissMatched: true
            };
        }
    }
}