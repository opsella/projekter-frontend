import { Component, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-navigation-route-element",
  templateUrl: "./navigation-route-element.component.html",
  styleUrls: ["./navigation-route-element.component.scss"],
  imports: [RouterLinkActive, RouterLink],
  standalone: true,
})
export class NavigationRouteElementComponent {
  @Input() public routeUrl = "";
  @Input() public routeName = "";
}
