import { Component } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthenticationService } from "../../authentication/authentication.service";
import { AvatarComponent } from "../../shared/avatar/avatar.component";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
  imports: [RouterLink, RouterLinkActive, AvatarComponent],
  standalone: true,
})
export class SideNavComponent {
  public options = [
    {
      id: "settings",
      name: "Settings",
      handler: () => this.settings(),
      isVisible: () => true,
    },
    {
      id: "profile",
      name: "Profile",
      handler: () => this.profile(),
      isVisible: () => true,
    },
  ];
  constructor(
    protected auth: AuthenticationService,
    private router: Router,
  ) {}

  public async settings() {
    await this.router.navigate(["/user/settings"]);
  }

  public async profile() {
    await this.router.navigate(["/user/profile"]);
  }
}
