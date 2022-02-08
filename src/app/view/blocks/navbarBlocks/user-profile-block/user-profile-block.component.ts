import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-user-profile-block',
  templateUrl: './user-profile-block.component.html',
  styleUrls: ['./user-profile-block.component.scss']
})
export class UserProfileBlockComponent implements OnInit {

  constructor(public _AccountService : AccountService) { }

  ngOnInit(): void {
    this._AccountService.getUserName();
  }
}
