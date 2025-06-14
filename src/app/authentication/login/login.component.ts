import { Component } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { AuthPageWrapperComponent } from "../auth-page-wrapper/auth-page-wrapper.component";
import { MatButton } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  imports: [AuthPageWrapperComponent, MatButton, RouterLink],
  providers: [AuthenticationService],
  standalone: true,
})
export class LoginComponent {
  constructor(public auth: AuthenticationService) {}
}
