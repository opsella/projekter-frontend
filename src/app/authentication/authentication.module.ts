import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AUTH_API_TOKEN } from "./authentication-api";
import { AuthenticationService } from "./authentication.service";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "../shared/shared.module";
import { AuthPageWrapperComponent } from "./auth-page-wrapper/auth-page-wrapper.component";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    LoginComponent,
    AuthPageWrapperComponent
  ],
  providers: [{
    provide  : AUTH_API_TOKEN,
    useClass : AuthenticationService
  }],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule
  ],
  exports: [
    LoginComponent,
    AuthPageWrapperComponent
  ]
})
export class AuthenticationModule { }
