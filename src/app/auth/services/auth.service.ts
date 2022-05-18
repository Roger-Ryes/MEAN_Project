import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AuthResponse } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoind: string = environment.baseUrl;

  constructor(private http: HttpClient) { }


  // Login
  login(email: string, password: string) {
    const path = `${this.endpoind}/auth/`;
    const body = {email, password};
    return this.http.post<AuthResponse>(path, body);
  }
}
