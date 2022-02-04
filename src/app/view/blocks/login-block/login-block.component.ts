import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/core/services/user/account.service';


@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss']
})
export class LoginBlockComponent implements OnInit {
  showPassword: boolean = false;
  constructor(private router: Router,private _AccountService : AccountService) {}

  ngOnInit(): void {
  }

  ngSubmit(formValue : FormData){
    this._AccountService.login({...formValue})
      .pipe(first())
      .subscribe({
          next: () => {
            this.router.navigateByUrl('/resturants');
          }
      });
  }
    

}
