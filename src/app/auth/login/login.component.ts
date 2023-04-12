import { Component } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from '../auth.service';
import { Register } from 'src/app/interfaces/register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  verifyLogin(data: Login) {
    this.authService.verifyLoginService(data);
  }
}
