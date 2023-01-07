import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { Router } from "@angular/router";

@Component({
  selector    : "app-side-nav",
  templateUrl : "./side-nav.component.html",
  styleUrls   : [
    "./side-nav.component.scss"
  ]
})
export class SideNavComponent {

  public user = {
    fullName   : "Jessen Gilbert",
    permission : "Admin",
    avatar     : "assets/images/projekter-logo.png"
  };

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
    public auth: AuthService,
    private router: Router
  ) { }

  public logout() {
    this.auth.logout({ returnTo: document.location.origin });
  }

  public async settings() {
    await this.router.navigate([
      "/user/settings"
    ]);
  }

  public async profile() {
    await this.router.navigate([
      "/user/profile"
    ]);
  }
}
