import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }
  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this.msg = "Registration Successful";
        this._router.navigate(['/login'])
        alert("Registraion succesfull")
      },
      error => {
        console.log("exception occured");
        this.msg = error.error;
        alert("User already exist!")
      }
    );
  }

}
