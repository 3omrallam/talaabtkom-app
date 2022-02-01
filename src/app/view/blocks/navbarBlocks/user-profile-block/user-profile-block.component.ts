import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/user/account.service';

@Component({
  selector: 'app-user-profile-block',
  templateUrl: './user-profile-block.component.html',
  styleUrls: ['./user-profile-block.component.scss']
})
export class UserProfileBlockComponent implements OnInit {
  userName : string ='';

  constructor(public _AccountService : AccountService) { }

  ngOnInit(): void {
    this.getUserName()
  }
  getUserName(){
    this.userName = JSON.parse(localStorage.getItem('user')!).data.name;
  }

}
