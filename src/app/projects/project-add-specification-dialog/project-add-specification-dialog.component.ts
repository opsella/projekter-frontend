import { Component, inject, model, ModelSignal } from "@angular/core";
import { MatButton } from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from "@angular/material/dialog";
import { MatFormField, MatInput, MatLabel } from "@angular/material/input";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ProjectId } from "../../models/ids/project-id";
import { ProjectAddSpecificationRequest } from "../../models/project";

export interface ProjectAddSpecificationDialogData {
  projectId: ProjectId;
}

@Component({
  selector: "app-project-add-specification-dialog",
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
  ],
  templateUrl: "./project-add-specification-dialog.component.html",
  styleUrl: "./project-add-specification-dialog.component.scss",
  standalone: true,
})
export class ProjectAddSpecificationDialogComponent {
  private readonly dialogRef = inject(
    MatDialogRef<ProjectAddSpecificationDialogComponent>,
  );
  private readonly data = inject<
    ProjectAddSpecificationDialogData | undefined | null
  >(MAT_DIALOG_DATA);
  public readonly specification: ModelSignal<ProjectAddSpecificationRequest | null> =
    model(null);

  protected form: FormGroup = new FormGroup({
    code: new FormControl("", { validators: [Validators.required] }),
    title: new FormControl("", { validators: [Validators.required] }),
    description: new FormControl("", { validators: [Validators.required] }),
  });

  public onCancelClick() {
    this.dialogRef.close(false);
  }

  public onSubmitClick() {
    if (this.form.valid) {
      this.specification.set(
        new ProjectAddSpecificationRequest(
          this.data.projectId,
          this.form.controls["code"].value,
          this.form.controls["title"].value,
          this.form.controls["description"].value,
        ),
      );
      this.dialogRef.close(this.specification());
    }
  }
}
