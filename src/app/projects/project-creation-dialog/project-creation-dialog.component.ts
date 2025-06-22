import { Component, inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormField, MatInput, MatLabel } from "@angular/material/input";
import { MatOption, MatSelect } from "@angular/material/select";
import { ProjectStatus } from "../../models/tenant";
import { CreateProjectRequest } from "../../models/project";
import { ProjectStatusId } from "../../models/ids/project-status-id";

@Component({
  selector: "app-project-creation-dialog",
  imports: [
    MatDialogModule,
    MatButton,
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatDialogTitle,
    MatSelect,
    MatOption,
  ],
  templateUrl: "./project-creation-dialog.component.html",
  styleUrl: "./project-creation-dialog.component.scss",
  standalone: true,
})
export class ProjectCreationDialogComponent {
  private readonly dialogRef = inject(
    MatDialogRef<ProjectCreationDialogComponent>,
  );
  protected readonly data = inject<ProjectStatus[]>(MAT_DIALOG_DATA);
  // public readonly project: ModelSignal<CreateProjectRequest> = model(this.data);

  protected form: FormGroup = new FormGroup({
    name: new FormControl("", {
      validators: [Validators.required],
    }),
    status: new FormControl(
      this.data.find((c) => c.category === "Proposed").id,
      {
        validators: [Validators.required],
      },
    ),
    photo: new FormControl(null),
    location: new FormControl(null),
  });

  public onCancelClick() {
    this.dialogRef.close(false);
  }

  public onSubmitClick() {
    if (this.form.valid) {
      const newProject = new CreateProjectRequest(
        this.form.controls["name"].value,
        new ProjectStatusId(this.form.controls["status"].value),
        this.form.controls["photo"].value,
        null,
      );

      this.dialogRef.close(newProject);
    }
  }
}
