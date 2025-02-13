import { Component } from "@angular/core";
import { AuthenticationService } from "../authentication.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
    standalone: false
})
export class LoginComponent  {

  constructor(
    public auth: AuthenticationService
  ) { }
}
