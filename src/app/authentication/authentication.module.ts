import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTH_API_TOKEN } from './authentication-api'
import { AuthenticationService } from './authentication.service'



@NgModule({
  declarations: [],
  providers: [
    {
      provide: AUTH_API_TOKEN,
      useClass: AuthenticationService
    }
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
