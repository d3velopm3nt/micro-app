import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss'],
})
export class AuthUserComponent implements OnInit, OnDestroy {
  private _username = "";
  get userName(): string {
    if(this._username !== this.authService.userName) {
     console.log('user: ' + this.authService.userName)
    this._username = this.authService.userName;
   }
    return this._username;
  }

  constructor(
     private authService: AuthService
    ) { }
  ngOnDestroy(): void {
    console.log('destory auth user')
  }
  ngOnInit(): void {
    console.log('auth user component loaded')

    this.authService.username$.subscribe(user =>{
      if(this._username !== user) this._username = user;
    })
  }
}
