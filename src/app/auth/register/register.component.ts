import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Register } from 'src/app/interfaces/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  role :any;
  storeRegisterInfo(data: Register) {
    this.authService.storeLoginInfo(data);
  }
}
