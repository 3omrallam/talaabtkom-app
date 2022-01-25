import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account.service';
@Component({
  selector: 'app-phone-number-block',
  templateUrl: './phone-number-block.component.html',
  styleUrls: ['./phone-number-block.component.scss']
})
export class PhoneNumberBlockComponent implements OnInit {

  phoneForm:FormGroup = new FormGroup({
    phone:new FormControl(null , [Validators.required , Validators.pattern(`[0-9]{11}`)])
  })

  constructor(private _AccountService:AccountService) { }

  ngOnInit(): void {}
  ngSubmit(formValue : any){
    console.log(formValue.phone);
    
    this._AccountService.checkPhoneNumber(formValue).subscribe((res) => {
      if (res.success) {
        this._AccountService.verificationChecked = 1
        this._AccountService.phoneProccess = {
          phone : formValue.phone
        }
        this._AccountService.registerProccess = {
          phone : formValue.phone
        }
      }
      console.log(res.success);
    })    
  }

}
