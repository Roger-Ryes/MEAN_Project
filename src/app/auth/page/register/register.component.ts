import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  myForm: FormGroup = this.fb.group({
    name:["test4", [Validators.required]],
    email:["test4@test4.com", [Validators.required, Validators.email]],
    password:["test4123", [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb:FormBuilder,
    private router:Router) { }

  register(){
    this.router.navigate(["/dashboard"]);
  }
}
