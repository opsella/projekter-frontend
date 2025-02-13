import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../authentication/authentication.service";

@Component({
    selector: "app-side-nav",
    templateUrl: "./side-nav.component.html",
    styleUrls: ["./side-nav.component.scss"],
    standalone: false
})
export class SideNavComponent {

  public options = [
    {
      id        : "logout",
      name      : "Logout",
      handler   : () => this.logout(),
      isVisible : () => true,
    },
    {
      id        : "settings",
      name      : "Settings",
      handler   : () => this.settings(),
      isVisible : () => true,
    },
    {
      id        : "profile",
      name      : "Profile",
      handler   : () => this.profile(),
      isVisible : () => true,
    }
  ];
  constructor(
    protected auth: AuthenticationService,
    private router: Router
  ) { }

  public logout() {
    // TODO: update this after the oidc changes
    this.auth.logout();
  }

  public async settings() {
    await this.router.navigate(["/user/settings"]);
  }

  public async profile() {
    await this.router.navigate(["/user/profile"]);
  }
}
