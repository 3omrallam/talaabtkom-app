import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToggleBTN : Boolean = true
  
  constructor() { }
}
