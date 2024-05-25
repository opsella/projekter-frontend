import { Injectable } from "@angular/core";
import { AuthenticationApi } from "./authentication-api";
import { OidcSecurityService } from "angular-auth-oidc-client";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService implements AuthenticationApi {
  public user$?: Observable<{ name: string }> = undefined;

  constructor(
    public oidcSecurityService: OidcSecurityService
  ) {
  }

  public login(): Promise<string> {
    this.oidcSecurityService.authorize();
    return Promise.resolve("username");
  }

  public logout(): Promise<void> {
    this.oidcSecurityService.logoff()
      .subscribe(result => console.log(result));
    return Promise.resolve(undefined);
  }
}
