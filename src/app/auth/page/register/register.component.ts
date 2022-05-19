import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  myForm: FormGroup = this.fb.group({
    name: ["test4", [Validators.required]],
    email: ["test4@test4.com", [Validators.required, Validators.email]],
    password: ["test4", [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  register() {
    this.authService.register(this.myForm.value).subscribe(
      resp => {
        if (resp === true) {
          Swal.fire({
            title: 'Exito',
            text: 'Usuario creado',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.router.navigate(["/dashboard"]);
        }else{
          Swal.fire({
            title: 'Fallo',
            text: resp,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      }
    );
  }
}
