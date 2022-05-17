import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  myForm: FormGroup = this.fb.group({
    email: ["test", [Validators.required, Validators.email]],
    password: ["test123", [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder) { }

  login() {
    console.log(this.myForm.value);
    console.log(this.myForm.valid);
  }
}
