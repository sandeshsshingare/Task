import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  getlogged = localStorage.getItem('loggedIn');
  getparse = this.getlogged && JSON.parse(this.getlogged);

  name: string = this.getparse.nameUser;
  email: string = this.getparse.email;
  companyname: string = this.getparse.company;
  role: string = this.getparse.role;
  ngOnInit(): void {

    this.homeService.welcome = this.name;
  }
}
