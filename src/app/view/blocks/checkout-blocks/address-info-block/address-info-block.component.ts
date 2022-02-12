import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-info-block',
  templateUrl: './address-info-block.component.html',
  styleUrls: ['./address-info-block.component.scss']
})
export class AddressInfoBlockComponent implements OnInit {
  @Input() userAddress : any

  constructor() { }

  ngOnInit(): void {
  }

}
