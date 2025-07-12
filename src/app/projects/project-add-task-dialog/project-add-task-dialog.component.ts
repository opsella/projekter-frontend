import {Component, inject, input, InputSignal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FloatLabel} from "primeng/floatlabel";
import {InputGroup} from "primeng/inputgroup";
import {InputText} from "primeng/inputtext";
import {Button} from "primeng/button";
import {ProjectAddTaskRequest} from "../../models/project";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ProjectId} from "../../models/ids/project-id";
import {DatePicker} from "primeng/datepicker";

@Component({
  selector: 'app-project-add-task-dialog',
  imports: [
    ReactiveFormsModule,
    FloatLabel,
    InputGroup,
    InputText,
    Button,
    DatePicker
  ],
  templateUrl: './project-add-task-dialog.component.html',
  styleUrl: './project-add-task-dialog.component.scss'
})
export class ProjectAddTaskDialogComponent {
  public projectId: InputSignal<ProjectId> = input.required();
  private ref: DynamicDialogRef = inject(DynamicDialogRef);
  private config: DynamicDialogConfig = inject(DynamicDialogConfig);

  protected form: FormGroup = new FormGroup({
    name: new FormControl("", { validators: [Validators.required]}),
    description: new FormControl("", { validators: [Validators.required]}),
    dueDate: new FormControl("", { validators: [Validators.required]}),
  })

  public onCancelClick() {
    this.ref.close(false);
  }

  public onSubmitClick() {
    if (this.form.valid) {
      const newProject = new ProjectAddTaskRequest(
        this.projectId(),
        this.form.controls["name"].value,
        this.form.controls["description"].value,
        new Date(this.form.controls["dueDate"].value),
      );

      this.ref.close(newProject);
    }
  }
}
