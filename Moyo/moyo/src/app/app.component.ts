import { LoginService } from './shared/login.service';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moyo';

  flag:boolean=true;
  user!: User;

  constructor(
    public router: Router,
    private service:LoginService
  ){
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (e.url === '/login')
        {
          this.flag = false;
        }
        else
        {
          this.flag = true;
          this.service.User = JSON.parse( sessionStorage.getItem('Token-User') || "")
          this.service.GetUser(this.service.User.userID);
          this.service.Client = JSON.parse( sessionStorage.getItem('Client') || "")
        }
      }
    });
  }

  logout(){
    this.flag = false;
    this.service.Logout();
  }
}
