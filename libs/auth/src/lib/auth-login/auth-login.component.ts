import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent implements OnInit {
  constructor(private authService:AuthService) {}
  userName = '';
  password = '';

  ngOnInit(): void {
    console.log('auth login');
  }

  login(): void {
    debugger
    this.authService.login(this.userName, this.password);
  }

  logout(): void {
    //this.authService.logout();
  }
}
