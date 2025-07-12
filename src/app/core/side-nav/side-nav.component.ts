import {Component, computed, OnInit, Signal} from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthenticationService } from "../../authentication/authentication.service";
import { AvatarComponent } from "../../shared/avatar/avatar.component";
import {Button} from "primeng/button";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
  imports: [RouterLink, RouterLinkActive, AvatarComponent, Button],
  standalone: true,
})
export class SideNavComponent implements OnInit {
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
  });

  protected isDarkMode: boolean = false;

  constructor(
    protected auth: AuthenticationService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.refreshThemeIcon();
  }

  public async settings() {
    await this.router.navigate(["/user/settings"]);
  }

  public async profile() {
    await this.router.navigate(["/user/profile"]);
  }

  public toggleDarkMode() {
    const element = document.querySelector('html');
    element.classList.toggle('is-dark-mode');
    this.refreshThemeIcon();
  }

  private refreshThemeIcon(): void {
    const element = document.querySelector('html');
    this.isDarkMode = element.classList.contains('is-dark-mode');
  }
}
