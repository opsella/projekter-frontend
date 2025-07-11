import { Component, Signal } from "@angular/core";
import { AuthenticationService } from "../../authentication/authentication.service";
import { Router } from "@angular/router";
import { UsersService } from "../services/users.service";
import { ContentSectionComponent } from "../../shared/content-section/content-section.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { User } from "@auth0/auth0-angular";
import {IftaLabel} from "primeng/iftalabel";
import {InputText} from "primeng/inputtext";
import {Tooltip} from "primeng/tooltip";
import {Button} from "primeng/button";
import {InputGroup} from "primeng/inputgroup";
import {InputGroupAddon} from "primeng/inputgroupaddon";
import {FloatLabel} from "primeng/floatlabel";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  imports: [ContentSectionComponent, ReactiveFormsModule, IftaLabel, InputText, Tooltip, Button, InputGroup, InputGroupAddon, FloatLabel]
})
export class ProfileComponent {
  protected auth0User: Signal<User> = this.auth.auth0User;

  protected profileForm: FormGroup = new FormGroup({
    givenName: new FormControl(this.auth0User().given_name, {
      validators: [Validators.required]
    }),
    familyName: new FormControl(this.auth0User().family_name, {
      validators: [Validators.required]
    }),
    email: new FormControl(this.auth0User().email, {
      validators: [Validators.required]
    }),
    username: new FormControl(this.auth0User().preferred_username, {
      validators: [Validators.required]
    }),
    nickname: new FormControl(this.auth0User().nickname, {
      validators: [Validators.required]
    }),
    employeeId: new FormControl(this.auth0User().sub, {
      validators: [Validators.required]
    })
  });

  constructor(
    public auth: AuthenticationService,
    public router: Router,
    public userService: UsersService
  ) { }

  public logout() {
    this.auth.logout();
  }

  public tenant() {
    this.router.navigate(["tenant"]);
  }
}

