import { Component, Input } from "@angular/core";

@Component({
  selector    : "app-navigation-route-element",
  templateUrl : "./navigation-route-element.component.html",
  styleUrls   : [
    "./navigation-route-element.component.scss"
  ]
})
export class NavigationRouteElementComponent {
  @Input() public routeUrl = "";
  @Input() public routeName = "";
}
