import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/interface/auth.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    *{
      margin: 15px
    }
  `]
})
export class DashboardComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  get user() {
    return this.authService.user;
  }

  logout() {
    this.router.navigate(["/auth"]);
  }
}
