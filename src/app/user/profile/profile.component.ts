import { Component } from "@angular/core";
import { AuthenticationService } from "../../authentication/authentication.service";
import { Router } from "@angular/router";
import { UsersService } from "../services/users.service";
import { PageWrapperComponent } from "../../shared/page-wrapper/page-wrapper.component";
import { ContentSectionComponent } from "../../shared/content-section/content-section.component";
import { MatButton } from "@angular/material/button";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.scss"],
    imports: [PageWrapperComponent, ContentSectionComponent, MatButton]
})
export class ProfileComponent {

  constructor(
    public auth: AuthenticationService,
    public router: Router,
    public userService: UsersService
  ) { }

  public logout() {
    this.auth.logout();
  }

  public tenant() {
    this.router.navigate(["tenant"]);
  }
}

