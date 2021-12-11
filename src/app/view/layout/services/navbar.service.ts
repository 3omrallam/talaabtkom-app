import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  cartMenuToggle : Boolean = true;
  searchMenuToggle: Boolean = false;

  constructor() { }
}
