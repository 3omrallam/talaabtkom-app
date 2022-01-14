import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-block',
  templateUrl: './username-block.component.html',
  styleUrls: ['./username-block.component.scss']
})
export class UsernameBlockComponent implements OnInit {
  // Show Password Fields
  showPassword: boolean = false;
  showConfirmPassword:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
