import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = 'https://localhost:44351/api/user/';

  User: User = new User();
  Client: any;
  loggedIn!:boolean;
  constructor(private http: HttpClient, private router: Router) {}

  login(user: User) {
    return this.http
      .post(this.apiUrl + 'login', user)
      .toPromise()
      .then((res) => (this.User = res as User))
      .then((res) => sessionStorage.setItem('Token-User', JSON.stringify(res)))
      .then(() => this.loggedIn = true)
      .then(() => sessionStorage.setItem('loggedIn', JSON.stringify(this.loggedIn)));
  }

  get isLoggedIn() {
    this.loggedIn = JSON.parse(sessionStorage.getItem('loggedIn') || '{}');
    return this.loggedIn;
  }

  GetUser(id: number) {
    return this.http
      .get(this.apiUrl + 'client/' + id)
      .toPromise()
      .then((res) => (this.Client = res as any))
      .then((res) => sessionStorage.setItem('Client', JSON.stringify(res)));
  }

  Logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('login');
    this.User = new User();
    this.Client = "";
    this.loggedIn = false;
  }
}
