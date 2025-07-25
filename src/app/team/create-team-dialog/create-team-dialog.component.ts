import {Component, inject, input, InputSignal} from '@angular/core';
import {InputGroup} from "primeng/inputgroup";
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {AutoFocus} from "primeng/autofocus";
import {Button} from "primeng/button";
import {ProjectId} from "../../models/ids/project-id";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProjectAddTaskRequest} from "../../models/project";
import {Select} from "primeng/select";
import {User} from "../../models/user";
import {Avatar} from "primeng/avatar";
import {MultiSelect} from "primeng/multiselect";
import {CreateTeamRequest} from "../teams.service";

@Component({
  selector: 'app-create-team-dialog',
  imports: [
    InputGroup,
    FloatLabel,
    InputText,
    AutoFocus,
    Button,
    ReactiveFormsModule,
    Select,
    Avatar,
    MultiSelect
  ],
  templateUrl: './create-team-dialog.component.html',
  styleUrl: './create-team-dialog.component.scss'
})
export class CreateTeamDialogComponent {
  private ref: DynamicDialogRef = inject(DynamicDialogRef);
  private config: DynamicDialogConfig = inject(DynamicDialogConfig);

  public possibleTeamLeads: InputSignal<User[]> = input.required();
  public possibleTeamMembers: InputSignal<User[]> = input.required();

  protected form: FormGroup = new FormGroup({
    name: new FormControl("", { validators: [Validators.required] }),
    description: new FormControl("", { validators: [Validators.required] }),
    teamLead: new FormControl(null, { validators: [Validators.required] }),
    teamMembers: new FormControl(null, { validators: [Validators.required] })
  });

  public onCancelClick() {
    this.ref.close(false);
  }

  public onSubmitClick() {
    if (this.form.valid) {
      const newProject = new CreateTeamRequest(
        this.form.controls["name"].value,
        this.form.controls["description"].value,
        (this.form.controls["teamLead"].value as User).employee.id,
        (this.form.controls["teamMembers"].value as User[]).map(m => m.employee.id),
      );

      this.ref.close(newProject);
    }
  }}
