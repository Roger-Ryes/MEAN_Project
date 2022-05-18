import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { catchError, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoind: string = environment.baseUrl;
  private _user!: User;

  constructor(private http: HttpClient) { }

  get user() {
    return { ...this._user };
  }

  // Login
  login(email: string, password: string) {
    const path = `${this.endpoind}/auth/`;
    const body = { email, password };
    return this.http.post<AuthResponse>(path, body).pipe(
      tap(resp => {
        if (resp.ok) {
          this._user = { uid: resp.uid!, name: resp.name! }
        }
      }), // Se ejecuta antes del map y del catch
      map(resp => resp.ok),
      catchError(errr => of(false))
    );
  }
}
