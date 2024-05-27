import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AUTH_API_TOKEN } from "./authentication-api";
import { AuthenticationService } from "./authentication.service";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "../shared/shared.module";
import { AuthPageWrapperComponent } from "./auth-page-wrapper/auth-page-wrapper.component";
import { MatButtonModule } from "@angular/material/button";
import { AuthModule } from "angular-auth-oidc-client";
import { environment } from "../../environments/environment";


@NgModule({
  declarations: [
    LoginComponent,
    AuthPageWrapperComponent,
  ],
  providers: [{
    provide  : AUTH_API_TOKEN,
    useClass : AuthenticationService
  }],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    AuthModule.forRoot({
      config: environment.oidc
    })
  ],
  exports: [
    LoginComponent,
    AuthPageWrapperComponent,
    AuthModule,
  ]
})
export class AuthenticationModule { }
