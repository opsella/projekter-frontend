import {Component, inject, input, Input, InputSignal, OnInit} from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ProjectStatus } from "../../models/tenant";
import { CreateProjectRequest } from "../../models/project";
import { ProjectStatusId } from "../../models/ids/project-status-id";
import {Button} from "primeng/button";
import {InputText} from "primeng/inputtext";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Select} from "primeng/select";
import {InputGroup} from "primeng/inputgroup";
import {FloatLabel} from "primeng/floatlabel";
import {InputGroupAddon} from "primeng/inputgroupaddon";

@Component({
  selector: "app-project-creation-dialog",
  imports: [
    FormsModule,
    ReactiveFormsModule,
    Button,
    InputText,
    Select,
    InputGroup,
    FloatLabel,
    InputGroupAddon,
  ],
  providers: [],
  templateUrl: "./project-creation-dialog.component.html",
  styleUrl: "./project-creation-dialog.component.scss",
  standalone: true,
})
export class ProjectCreationDialogComponent {
  public statuses: InputSignal<ProjectStatus[]> = input.required();

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
  }

  protected form: FormGroup = new FormGroup({
    name: new FormControl("", {
      validators: [Validators.required],
    }),
    status: new FormControl(
      this.statuses().find((c) => c.category === "Proposed")?.id,
      {
        validators: [Validators.required],
      },
    ),
    photo: new FormControl(null),
    location: new FormControl(null),
  });

  public onCancelClick() {
    this.ref.close(false);
  }

  public onSubmitClick() {
    if (this.form.valid) {
      const newProject = new CreateProjectRequest(
        this.form.controls["name"].value,
        new ProjectStatusId(this.form.controls["status"].value),
        this.form.controls["photo"].value,
        null,
      );

      this.ref.close(newProject);
    }
  }
}
