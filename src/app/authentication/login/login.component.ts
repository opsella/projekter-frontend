import { Component } from "@angular/core";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector    : "app-login",
  templateUrl : "./login.component.html",
  styleUrls   : ["./login.component.scss"]
})
export class LoginComponent  {

  constructor(
    protected auth: AuthenticationService,
  ) { }
}
