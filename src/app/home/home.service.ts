import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}
  // id!: number;
  name: string = '';
  email: string = '';
  companyname: string = '';
  role: string = '';
  loggedInUser: any = [];
  loggedInUserobj: any;
  local!: any;
  localparse!: any;
  welcome: any;

  // nameUser!:string
  getData(id: number) {
    this.local = localStorage.getItem('register');
    this.localparse = this.local && JSON.parse(this.local);
    // localData: any = this.localparse;
    for (let i = 0; i < this.localparse.length; i++) {
      if (i === id) {
        this.name = this.localparse[i].name;
        this.email = this.localparse[i].email;
        this.companyname = this.localparse[i].companyname;
        this.role = this.localparse[i].role;
        this.loggedInUserobj = {
          nameUser: this.name,
          email: this.email,
          company: this.companyname,
          role: this.role,
        };

        this.loggedInUser.push(this.loggedInUserobj);
        // alert(this.loggedInUser[0].nameUser);
        localStorage.setItem('loggedIn', JSON.stringify(this.loggedInUserobj));
      }
    }
  }
}
