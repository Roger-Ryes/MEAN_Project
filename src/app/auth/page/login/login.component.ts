import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  myForm: FormGroup = this.fb.group({
    email: ["test@test.com", [Validators.required, Validators.email]],
    password: ["test123", [Validators.required, Validators.minLength(5)]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    const { email, password } = this.myForm.value;

    this.authService.login(email, password).subscribe(resp => {
      console.log(resp);
    });

    // this.router.navigate(["/dashboard"]);
  }
}
