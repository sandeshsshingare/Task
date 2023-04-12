import { Component } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(private homeService: HomeService) {}
  name: string = 'sandesh';
  localget: any = localStorage.getItem('loggedIn');
  localparse = this.localget && JSON.parse(this.localget);

  getName() {
    return this.localparse.name;
  }

  clearLogin() {
    localStorage.removeItem('loggedIn');
  }
}
