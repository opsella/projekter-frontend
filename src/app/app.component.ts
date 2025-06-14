import { Component } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { TopNavComponent } from "./core/top-nav/top-nav.component";
import { SideNavComponent } from "./core/side-nav/side-nav.component";
import { MainContentComponent } from "./core/main-content/main-content.component";
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [
    RouterOutlet,
    AsyncPipe,
    TopNavComponent,
    SideNavComponent,
    MainContentComponent,
  ],
})
export class AppComponent {
  public title = "projekter-frontend";

  constructor(protected auth: AuthService) {}
}
