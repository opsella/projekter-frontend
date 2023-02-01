import { Component } from "@angular/core";

@Component({
  selector    : "app-top-nav",
  templateUrl : "./top-nav.component.html",
  styleUrls   : ["./top-nav.component.scss"]
})
export class TopNavComponent {
  protected settingsRoute: NavigationRouteOption = {
    icon : "fa-sharp fa-solid fa-gear",
    name : "Settings",
    path : "/settings"
  };
  protected mainRoutes: NavigationRouteOption[] = [
    {
      icon : "fa-sharp fa-solid fa-bars-progress",
      name : "Projects",
      path : "/projects"
    },
    {
      icon : "fa-sharp fa-solid fa-boxes-stacked",
      name : "Inventory",
      path : "/inventory"
    },
    {
      icon : "fa-sharp fa-solid fa-users",
      name : "Employees",
      path : "/employees"
    },
    {
      icon : "fa-sharp fa-solid fa-copy",
      name : "Templates",
      path : "/templates"
    }
  ];

  protected secondaryRoutes: NavigationRouteOption[] = [
    {
      icon : "fa-solid fa-bullhorn",
      name : "feedback",
      path : "/feedback"
    },
    {
      icon : "fa-sharp fa-solid fa-question",
      name : "help",
      path : "/help"
    },
  ];
}

interface NavigationRouteOption {
  icon: string;
  name: string;
  path: string;
}
