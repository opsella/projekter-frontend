import {Component, inject, input, InputSignal, model, ModelSignal} from "@angular/core";
import {
  FormControl,
  FormGroup, FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ProjectId } from "../../models/ids/project-id";
import { ProjectAddSpecificationRequest } from "../../models/project";
import {Button} from "primeng/button";
import {InputText} from "primeng/inputtext";
import {InputGroup} from "primeng/inputgroup";
import {FloatLabel} from "primeng/floatlabel";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

export interface ProjectAddSpecificationDialogData {
  projectId: ProjectId;
}

@Component({
  selector: "app-project-add-specification-dialog",
  imports: [
    ReactiveFormsModule,
    Button,
    FormsModule,
    InputText,
    InputGroup,
    FloatLabel,
  ],
  templateUrl: "./project-add-specification-dialog.component.html",
  styleUrl: "./project-add-specification-dialog.component.scss",
  standalone: true,
})
export class ProjectAddSpecificationDialogComponent {
  public projectId: InputSignal<ProjectId> = input.required();
  public readonly specification: ModelSignal<ProjectAddSpecificationRequest | null> = model(null);

  private ref: DynamicDialogRef = inject(DynamicDialogRef);
  private config: DynamicDialogConfig = inject(DynamicDialogConfig);

  protected form: FormGroup = new FormGroup({
    code: new FormControl("", { validators: [Validators.required] }),
    title: new FormControl("", { validators: [Validators.required] }),
    description: new FormControl("", { validators: [Validators.required] }),
  });

  public onCancelClick() {
    this.specification.set(null);
    this.ref.close(false);
  }

  public onSubmitClick() {
    if (this.form.valid) {
      this.specification.set(new ProjectAddSpecificationRequest(
        this.projectId(),
        this.form.controls["code"].value,
        this.form.controls["title"].value,
        this.form.controls["description"].value,
      ));
      this.ref.close(this.specification());
    }
  }
}
