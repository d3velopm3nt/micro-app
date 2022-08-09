import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { FormsModule } from '@angular/forms';
import { AuthLoginComponent } from './auth-login/auth-login.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AuthUserComponent, AuthLoginComponent],
  exports: [AuthUserComponent, AuthLoginComponent],
})
export class AuthModule {}
  