import { Component, computed, Signal } from "@angular/core";
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

  protected displayName: Signal<string> = computed(() => {
    const auth0User = this.auth.auth0User();
    return auth0User?.given_name ?? auth0User?.nickname ?? "Not found";
  })

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
