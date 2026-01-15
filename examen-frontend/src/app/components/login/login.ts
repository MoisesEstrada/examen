import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  standalone: false
})
export class LoginComponent {
  user = { username: '', password: '' };
  error = '';

  constructor(private auth: AuthService, private router: Router) { }

  onLogin() {
    this.auth.login(this.user).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: () => this.error = 'Acceso denegado'
    });
  }
}
