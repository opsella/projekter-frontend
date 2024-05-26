import { Component } from "@angular/core";
import { OidcSecurityService } from "angular-auth-oidc-client";

@Component({
  selector    : "app-settings",
  templateUrl : "./settings.component.html",
  styleUrls   : ["./settings.component.scss"]
})
export class SettingsComponent  {

  constructor(
    public auth: OidcSecurityService
  ) { }
}
