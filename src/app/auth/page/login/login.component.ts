import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  myForm: FormGroup = this.fb.group({
    email: ["test@test.com", [Validators.required, Validators.email]],
    password: ["test123", [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder,
    private router:Router
    ) { }

  login() {
    this.router.navigate(["/dashboard"]);
  }
}
