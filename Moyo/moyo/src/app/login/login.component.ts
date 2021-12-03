import { LoginService } from './../shared/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: LoginService,
  ) { }

  ngOnInit(): void {
  }

  formData: User ={
    userID: 0,
    userName:"",
    password:""
  }
  hide: boolean = true;
  emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  loginForm: FormGroup = this.fb.group({
    Username: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(4)]],
  });

  loadLinkedin(){
    window.open("https://www.linkedin.com/in/basheera-hoosen-5435991b9/", "_blank");
  }

  login(form: User) {
    this.service.login(form).then((res: any) => {
      this.router.navigateByUrl('products');
    }, (error: HttpErrorResponse) => {
       if (error.error.Message != "Email/Password invalid.")
       {
        console.log("invalid username/password")
       }

       else {
         console.log("The system cannot establish a connection with the database!", "Error");
       }
    });
  }

}
