import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}
  // id!: number;
  local: any = localStorage.getItem('register');
  localparse: any = JSON.parse(this.local);
  localData: any = this.localparse;
  name: string = '';
  email: string = '';
  companyname: string = '';
  role: string = '';
  loggedInUser: any = [];
  loggedInUserobj: any;

  // nameUser!:string
  getData(id: number) {
    for (let i = 0; i < this.localData.length; i++) {
      if (i === id) {
        this.name = this.localData[i].name;
        this.email = this.localData[i].email;
        this.companyname = this.localData[i].companyname;
        this.role = this.localData[i].role;
        this.loggedInUserobj = {
          nameUser: this.name,
          email: this.email,
          company: this.companyname,
          role: this.role,
        };

        this.loggedInUser.push(this.loggedInUserobj);
        localStorage.setItem('loggedIn', JSON.stringify(this.loggedInUserobj));
      }
    }
  }
}
