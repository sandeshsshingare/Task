import { Component } from '@angular/core';
import { HomeService } from '../home/home.service';
import { MyProfileComponent } from '../home/my-profile/my-profile.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(public homeService: HomeService) {}
  // name: string = 'sandesh';
  // localget: any = localStorage.getItem('loggedIn');
  // localparse = this.localget && JSON.parse(this.localget);

  // getName(): string {
  //   if (this.localparse.name != null && this.localparse.name != undefined)
  //     return this.localparse.name;
  //   else return 'hello';
  // }

  clearLogin() {
    localStorage.removeItem('loggedIn');
    this.homeService.welcome = null;
  }
}
