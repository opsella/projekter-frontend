import { Component } from "@angular/core";
import { AuthenticationService } from "../../authentication/authentication.service";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.scss"],
    standalone: false
})
export class ProfileComponent {

  constructor(
    public auth: AuthenticationService
  ) { }
}
