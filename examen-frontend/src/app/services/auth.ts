import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) { }

  login(creds: any) {
    return this.http.post<any>(this.url, creds).pipe(
      tap(res => {
        if (typeof localStorage !== 'undefined' && res.jwt) {
          localStorage.setItem('token', res.jwt);
        }
      })
    );
  }

  getToken() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  logout() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('token');
    }
  }
}
