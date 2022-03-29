import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-forget-password-section',
  templateUrl: './forget-password-section.component.html',
  styleUrls: ['./forget-password-section.component.scss']
})
export class ForgetPasswordSectionComponent implements OnInit {

  constructor(public _AccountService: AccountService) { }

  ngOnInit(): void {
  }
 


}
