import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    standalone: false
})
export class AppComponent {
  public title = "projekter-frontend";

  constructor(
    public auth: AuthService
  ) { }
}
