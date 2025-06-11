import { Component } from "@angular/core";
import { AuthenticationService } from "../../authentication/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector    : "app-profile",
  templateUrl : "./profile.component.html",
  styleUrls   : ["./profile.component.scss"],
  standalone  : false
})
export class ProfileComponent {

  constructor(
    public auth: AuthenticationService,
    public router: Router
  ) { }

  public logout() {
    this.auth.logout();
  }

  public tenant() {
    this.router.navigate(["tenant"]);
  }
}

