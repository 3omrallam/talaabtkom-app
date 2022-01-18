import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-verify-block',
  templateUrl: './verify-block.component.html',
  styleUrls: ['./verify-block.component.scss']
})
export class VerifyBlockComponent implements OnInit {

  constructor(public _AccountService : AccountService) { }

  ngOnInit(): void {
  }
  ngSubmit(formValue : FormData){
    console.log(formValue);
    
  }

}
