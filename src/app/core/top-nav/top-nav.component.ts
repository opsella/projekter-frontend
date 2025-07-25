import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NavigationRouteElementComponent } from "./navigation-route-element/navigation-route-element.component";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"],
  imports: [RouterLink, NavigationRouteElementComponent],
  standalone: true,
})
export class TopNavComponent {
  protected settingsRoute: NavigationRouteOption = {
    icon: "fa-sharp fa-solid fa-gear",
    name: "Settings",
    path: "/settings",
  };

  protected mainRoutes: NavigationRouteOption[] = [
    {
      icon: "fa-sharp fa-solid fa-bars-progress",
      name: "Projects",
      path: "/project",
    },
    {
      icon: "fa-sharp fa-solid fa-boxes-stacked",
      name: "Inventory",
      path: "/inventory",
    },
    {
      icon: "fa-sharp fa-solid fa-users",
      name: "Team",
      path: "/team",
    },
    {
      icon: "fa-sharp fa-solid fa-clipboard",
      name: "Templates",
      path: "/template",
    },
    {
      icon: "fa-sharp fa-solid fa-user-tag",
      name: "Customers",
      path: "/customer",
    },
  ];

  protected secondaryRoutes: NavigationRouteOption[] = [
    {
      icon: "fa-solid fa-bullhorn",
      name: "feedback",
      path: "/feedback",
    },
    {
      icon: "fa-sharp fa-solid fa-question",
      name: "help",
      path: "/help",
    },
  ];

  protected navbarExpanded: boolean = false;
  protected toggleNavbarExpanded(): void {
    console.log("Normally this would expand but it's pissing me off.");
    // this.navbarExpanded = !this.navbarExpanded;
  }
}

interface NavigationRouteOption {
  icon: string;
  name: string;
  path: string;
}
