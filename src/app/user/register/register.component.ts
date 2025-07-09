import { Component, inject, OnInit } from "@angular/core";
import { AuthenticationService } from "../../authentication/authentication.service";
import { take } from "rxjs";
import { RegistrationService } from "../../registration/registration.service";
import { User } from "@auth0/auth0-angular";

@Component({
  selector: "app-register",
  imports: [],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss"
})
export class RegisterComponent implements OnInit {
  private authService: AuthenticationService = inject(AuthenticationService);
  private registrationService: RegistrationService = inject(RegistrationService);

  public ngOnInit(): void {
    const user: User = this.authService.auth0User();

    const profilePicture = user.picture ?? "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg";

    this.registrationService.registerUser({
      firstname: user.given_name,
      lastname: user.family_name,
      email: user.email,
      username: user.preferred_username,
      profile_picture: profilePicture,
      phone_number: null
    })
      .pipe(
        take(1)
      )
      .subscribe();
  }
}
