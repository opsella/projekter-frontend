import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AUTH_API_TOKEN } from "./authentication-api";
import { AuthenticationService } from "./authentication.service";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "../shared/shared.module";
import { AuthPageWrapperComponent } from "./auth-page-wrapper/auth-page-wrapper.component";
import { MatButtonModule } from "@angular/material/button";
import { AuthModule } from "angular-auth-oidc-client";


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
      config: {
        authority                            : "https://authority.opsella.com",
        redirectUrl                          : window.location.origin,
        postLogoutRedirectUri                : window.location.origin,
        clientId                             : "projekter.client",
        scope                                : "openid profile offline_access email tenant-management-api.read tenant-management-api.write", // 'openid profile offline_access ' + your scopes
        responseType                         : "code",
        silentRenew                          : true,
        useRefreshToken                      : true,
        renewTimeBeforeTokenExpiresInSeconds : 30,
      }
    })
  ],
  exports: [
    LoginComponent,
    AuthPageWrapperComponent,
    AuthModule,
  ]
})
export class AuthenticationModule { }
