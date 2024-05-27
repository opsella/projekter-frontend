import { inject, Injectable } from "@angular/core";
import { AuthenticationApi } from "./authentication-api";
import { OidcSecurityService } from "angular-auth-oidc-client";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService implements AuthenticationApi {
  private readonly oidcSecurityService: OidcSecurityService = inject(OidcSecurityService);
  private readonly authenticated$ = this.oidcSecurityService.isAuthenticated$
    .subscribe(result => {
      this.isAuthenticated = result.isAuthenticated;
      console.warn("Authenticated: " + this.isAuthenticated);
    });
  public configuration$ = this.oidcSecurityService.getConfiguration();
  public userData$ = this.oidcSecurityService.userData$;

  public isAuthenticated: boolean = false;

  public login(): void {
    this.oidcSecurityService.authorize();
  }

  public logout(): void {
    this.oidcSecurityService
      .logoff()
      .subscribe(result => console.log(result));
  }

  public refreshSession(): void {
    this.oidcSecurityService
      .forceRefreshSession()
      .subscribe(result => console.log(result));
  }
}
