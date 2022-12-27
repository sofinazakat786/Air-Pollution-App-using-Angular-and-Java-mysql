import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  constructor(public _service : RegistrationService) { }

  ngOnInit(): void {
    this.isUserLoggedIn =  this._service.isUserLoggedIn();
  }
  
  

}
