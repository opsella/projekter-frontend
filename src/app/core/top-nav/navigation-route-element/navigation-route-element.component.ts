import {Component, input, InputSignal} from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import {Tooltip} from "primeng/tooltip";
import {Button} from "primeng/button";

@Component({
  selector: "app-navigation-route-element",
  templateUrl: "./navigation-route-element.component.html",
  styleUrls: ["./navigation-route-element.component.scss"],
  imports: [RouterLinkActive, RouterLink, Tooltip, Button],
  standalone: true,
})
export class NavigationRouteElementComponent {
  public routeUrl: InputSignal<string> = input.required();
  public routeName: InputSignal<string> = input.required();
  public expanded: InputSignal<boolean> = input.required();
}
