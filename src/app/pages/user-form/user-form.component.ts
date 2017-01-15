import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {emailValidator, confirmPasswordValidator} from './CustomValidators';

@Component({
    selector: 'user-form',
    templateUrl: './user-form.view.html',
    styleUrls: ['./user-form.style.css']
})

export class UserFormComponent {
    userForm : FormGroup;
    showSuccess: boolean = false;

    constructor(formBuilder: FormBuilder, private router: Router) {
        this.userForm = formBuilder.group({
            email : ['', Validators.compose([Validators.required, emailValidator])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            confirmedPassword : ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        },
        {
            validator: confirmPasswordValidator('password', 'confirmedPassword')
        })
    }

    onSubmit(formValue){
        this.showSuccess = true;
    }

    goBack(){
        this.router.navigate(['/']);
    }
}