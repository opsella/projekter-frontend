import { Component, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { CreateProjectRequest } from '../../models/project';
import { ProjectStatusId } from '../../models/ids/project-status-id';

@Component({
  selector : "app-project-creation-dialog",
  imports  : [
    MatDialogModule,
    MatButton,
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatDialogTitle
  ],
  templateUrl : "./project-creation-dialog.component.html",
  styleUrl    : "./project-creation-dialog.component.scss"
})
export class ProjectCreationDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<ProjectCreationDialogComponent>);
  private readonly data = inject<CreateProjectRequest | undefined | null>(MAT_DIALOG_DATA);
  public readonly project = model(this.data);

  protected form: FormGroup = new FormGroup({
    name     : new FormControl(this.project()?.name ?? "", { validators: [Validators.required] }),
    status   : new FormControl(this.project()?.status.value ?? "", { validators: [Validators.required] }),
    photo    : new FormControl(this.project()?.photo ?? null),
    location : new FormControl(this.project()?.location ?? null)
  });

  public onCancelClick() {
    this.dialogRef.close(false);
  }

  public onSubmitClick() {
    if (this.form.valid) {
      this.project.set(new CreateProjectRequest(
        this.form.controls["name"].value,
        new ProjectStatusId(this.form.controls["status"].value),
        this.form.controls["photo"].value,
        null
      ));
      this.dialogRef.close(this.project());
    }
  }
}
