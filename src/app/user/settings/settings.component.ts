import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector    : "app-settings",
  templateUrl : "./settings.component.html",
  styleUrls   : ["./settings.component.scss"]
})
export class SettingsComponent  {

  constructor(
    public auth: AuthService
  ) { }
}
