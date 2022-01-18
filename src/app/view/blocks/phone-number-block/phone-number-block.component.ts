import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-phone-number-block',
  templateUrl: './phone-number-block.component.html',
  styleUrls: ['./phone-number-block.component.scss']
})
export class PhoneNumberBlockComponent implements OnInit {

  constructor(private _AccountService:AccountService) { }

  ngOnInit(): void {}
  
  ngSubmit(formValue : FormData){
    this._AccountService.checkPhoneNumber(formValue).subscribe((res) => {
      this._AccountService.phoneChecked = res 
    })    
  }

}
