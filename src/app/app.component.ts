import { Component, OnInit } from "@angular/core";
import { OidcSecurityService } from "angular-auth-oidc-client";
import { AuthenticationService } from "./authentication/authentication.service";

@Component({
  selector    : "app-root",
  templateUrl : "./app.component.html",
  styleUrls   : ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public title = "projekter-frontend";

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private authenticationService: AuthenticationService,
  ) { }

  public ngOnInit(): void {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(loginResponse => {
        const { isAuthenticated, userData, accessToken, idToken, configId } = loginResponse;
      });
  }
}
