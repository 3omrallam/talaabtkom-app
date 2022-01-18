import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-create-account-section',
  templateUrl: './create-account-section.component.html',
  styleUrls: ['./create-account-section.component.scss']
})
export class CreateAccountSectionComponent implements OnInit {

  constructor(public _AccountService : AccountService) { }

  ngOnInit(): void {
    
  }

}
