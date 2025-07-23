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
import {AlertService} from "../../core/alert.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  imports: [ContentSectionComponent, ReactiveFormsModule, InputText, Tooltip, Button, InputGroup, InputGroupAddon, FloatLabel, InputMask]
})
export class ProfileComponent {
  protected user: HttpResourceRef<User> = this.userService.getCurrentUser();
  protected permissions: WritableSignal<UserPermission[]> = signal<UserPermission[]>([]);

  protected isSaving: boolean = false;

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
    public userService: UsersService,
    public alertService: AlertService
  ) {
    effect(() => {
      const user = this.user.value();
      if (user) {
        this.profileForm.patchValue({
          givenName: user.first_name,
          familyName: user.last_name,
          nickname: user.nickname,
        });

        this.employeeInfoForm.patchValue({
          employeeId: user.employee?.externalEmployeeId ?? user.employee.id,
        });

        this.contactInfoForm.patchValue({
          email: user.email,
          phone: user.phoneNumber.substring(2),
        });
      }
    });
  }

  protected savePersonalInformation(): void {
    if (this.profileForm.invalid || this.contactInfoForm.invalid) {
      this.alertService.error("Invalid Form(s)", "Form's are invalid, please fix and try again");
      return;
    }

    this.isSaving = true;

    const formPhone: string = this.contactInfoForm.controls["phone"].value;
    const formatedPhone = "+1" + formPhone.replace("/\D/g", "");

    const request = new UserPersonalInformationUpdateRequest(
      this.user.value().id,
      this.profileForm.controls["givenName"].value,
      this.profileForm.controls["familyName"].value,
      this.profileForm.controls["nickname"].value,
      formatedPhone,
    );

    this.userService.updatePersonalInformation(request)
      .pipe(
        take(1)
      )
      .subscribe({
        next: response => {
          this.alertService.info("Profile Updated", "Your profile has been updated");
          this.user.set(response);
        },
        error: err => {
          this.alertService.error("An error occurred", "We're sorry but an error occurred when saving")
        },
        complete: () => {
          this.isSaving = false;
        }
      });
  }
}

