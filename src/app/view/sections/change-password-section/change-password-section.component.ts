import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-change-password-section',
  templateUrl: './change-password-section.component.html',
  styleUrls: ['./change-password-section.component.scss']
})
export class ChangePasswordSectionComponent implements OnInit {

  constructor(public _AuthService: AuthService) { }

  ngOnInit(): void {
  }

}
