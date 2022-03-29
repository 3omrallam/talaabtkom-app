import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.scss']
})
export class LoginSectionComponent implements OnInit {

  constructor(public _AuthService: AuthService) { }

  ngOnInit(): void {
  }
  

 

}
