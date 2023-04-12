import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';
import { Register } from '../interfaces/register';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private homeService: HomeService) {}
  formData!: Register;
  local: any = localStorage.getItem('register');
  localparse: any = JSON.parse(this.local);
  registerData: any = this.localparse ? this.localparse : [];
  loginVerify: any = [];
  storeLoginInfo(data: Register) {
    this.formData = {
      email: data.email,
      password: data.password,
      name: data.name,
      companyname: data.companyname,
      role: data.role,
    };
    this.registerData.push(this.formData);
    localStorage.setItem('register', JSON.stringify(this.registerData));
  }
  res: string = 'register';
  flag: boolean = false;
  verifyLoginService(data: Login): void {
    let a = localStorage.getItem('register');
    if (a != undefined) {
      this.loginVerify = JSON.parse(a);
    }
    // this.loginVerify =a && JSON.parse(a); //alternative for if condition
    console.log(this.loginVerify.length);
    for (let i = 0; i < this.loginVerify.length; i++) {
      if (
        this.loginVerify[i].email === data.email &&
        this.loginVerify[i].password === data.password
      ) {
        this.flag = true;
        this.homeService.getData(i);
      }
    }
    if (this.flag === true) {
      this.router.navigateByUrl('myProfile');
    } else {
      alert('Wrong email or password');
    }
    this.flag = false;
    console.log(data);

    console.log(this.loginVerify);
  }
}
