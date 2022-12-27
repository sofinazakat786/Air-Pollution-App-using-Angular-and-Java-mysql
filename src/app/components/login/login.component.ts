import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Route, Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user  = new User();
  msg='';

  constructor( private _service : RegistrationService, private _router : Router) { }


  ngOnInit(): void {
  }

  //function for login user
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        sessionStorage.setItem("username",this.user.userName)
        this._router.navigate(['/airwatcher'])
        alert("Login Successfull!")
      },
      error => {
        console.log("exception occured");
        this.msg="Bad Credentials! Please enter valid username and password";
      }
    );
  }
  

}
