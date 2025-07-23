import {Component, effect, model, ModelSignal, signal, WritableSignal} from "@angular/core";
import { AuthenticationService } from "../../authentication/authentication.service";
import { Router } from "@angular/router";
import {UserPersonalInformationUpdateRequest, UsersService} from "../services/users.service";
import { ContentSectionComponent } from "../../shared/content-section/content-section.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {Tooltip} from "primeng/tooltip";
import {Button} from "primeng/button";
import {InputGroup} from "primeng/inputgroup";
import {InputGroupAddon} from "primeng/inputgroupaddon";
import {FloatLabel} from "primeng/floatlabel";
import {InputMask} from "primeng/inputmask";
import {User, UserPermission} from "../../models/user";
import {HttpResourceRef} from "@angular/common/http";
import {take} from "rxjs";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  imports: [ContentSectionComponent, ReactiveFormsModule, InputText, Tooltip, Button, InputGroup, InputGroupAddon, FloatLabel, InputMask]
})
export class ProfileComponent {
  protected user: HttpResourceRef<User> = this.userService.getCurrentUser();
  protected permissions: WritableSignal<UserPermission[]> = signal<UserPermission[]>([]);
  public personalData: ModelSignal<UserPersonalInformationUpdateRequest | null> = model(null);

  protected employeeInfoForm: FormGroup = new FormGroup({
    employeeId: new FormControl({
      value: this.user.value()?.employee.externalEmployeeId ?? "NONE PROVIDED",
      disabled: true
    }, {
      validators: [Validators.required]
    })
  });

  protected profileForm: FormGroup = new FormGroup({
    givenName: new FormControl("", {
      validators: [Validators.required]
    }),
    familyName: new FormControl("", {
      validators: [Validators.required]
    }),
    nickname: new FormControl("", {
      validators: [Validators.required]
    }),
  });

  protected contactInfoForm: FormGroup = new FormGroup({
    email: new FormControl({
      value: this.user.value()?.email,
      disabled: true
    }, {
      validators: [Validators.required]
    }),
    phone: new FormControl("", {
      validators: []
    })
  });

  constructor(
    public auth: AuthenticationService,
    public router: Router,
    public userService: UsersService
  ) {
    effect(() => {
      const user = this.user.value();
      if (user) {
        this.profileForm.patchValue({
          givenName: user.first_name,
          familyName: user.last_name,
          nickname: user.nickname,
        });
      }
    });
  }

  protected savePersonalInformation(): void {
    if (this.profileForm.invalid) {
      return;
    }

    const request = new UserPersonalInformationUpdateRequest(
      this.user.value().id,
      this.profileForm.controls["givenName"].value,
      this.profileForm.controls["familyName"].value,
      this.profileForm.controls["nickname"].value,
    );

    this.userService.updatePersonalInformation(request)
      .pipe(
        take(1)
      )
      .subscribe(response => {
        this.user.set(response);
      });
  }
}

