import { Component, OnInit } from "@angular/core";
import { OidcSecurityService } from "angular-auth-oidc-client";
import { AuthenticationService } from "./authentication/authentication.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector    : "app-root",
  templateUrl : "./app.component.html",
  styleUrls   : ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public title = "projekter-frontend";
  protected isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private authenticationService: AuthenticationService,
  ) { }

  public ngOnInit(): void {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(loginResponse => {
        const { isAuthenticated, userData, accessToken, idToken, configId } = loginResponse;
        this.isAuthenticated$.next(isAuthenticated);
      });
  }
}
