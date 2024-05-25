import { Component } from "@angular/core";
import { OidcSecurityService } from "angular-auth-oidc-client";

@Component({
  selector    : "app-profile",
  templateUrl : "./profile.component.html",
  styleUrls   : ["./profile.component.scss"]
})
export class ProfileComponent {
  public userData = this.auth.userData$;

  constructor(
    public auth: OidcSecurityService
  ) { }
}
