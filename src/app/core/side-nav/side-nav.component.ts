import {Component, computed, OnInit, Signal} from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthenticationService } from "../../authentication/authentication.service";
import { AvatarComponent } from "../../shared/avatar/avatar.component";
import {Button} from "primeng/button";
import {Menu} from "primeng/menu";
import {MenuItem} from "primeng/api";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
  imports: [RouterLink, RouterLinkActive, AvatarComponent, Button, Menu],
  standalone: true,
})
export class SideNavComponent implements OnInit {
  public menuItems: MenuItem[] = [
    {
      label: "Profile",
      icon: "pi pi-user",
      routerLink: "/user/profile"
    },
    {
      label: "Settings",
      icon: "pi pi-cog",
      routerLink: "/user/settings"
    },
    {
      label: "Your Organization",
      icon: "pi pi-briefcase",
      routerLink: "/tenant"
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      routerLink: "/auth/logout"
    },
  ];

  protected displayName: Signal<string> = computed(() => {
    const auth0User = this.auth.auth0User();
    return auth0User?.given_name ?? auth0User?.nickname ?? "Not found";
  });

  protected isDarkMode: boolean = false;

  constructor(
    protected auth: AuthenticationService,
  ) {}

  public ngOnInit(): void {
    this.refreshThemeIcon();
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
