import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-user-info-section',
  templateUrl: './user-info-section.component.html',
  styleUrls: ['./user-info-section.component.scss']
})
export class UserInfoSectionComponent implements OnInit {

  constructor(public _AccountService: AccountService) { }

  ngOnInit(): void {
  }

}
