import {Component, input, InputSignal, model, ModelSignal, output, OutputEmitterRef} from "@angular/core";
import {
  FormControl,
  FormGroup, FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ProjectId } from "../../models/ids/project-id";
import { ProjectAddSpecificationRequest } from "../../models/project";
import {Dialog} from "primeng/dialog";
import {Button} from "primeng/button";
import {IftaLabel} from "primeng/iftalabel";
import {InputText} from "primeng/inputtext";

export interface ProjectAddSpecificationDialogData {
  projectId: ProjectId;
}

@Component({
  selector: "app-project-add-specification-dialog",
  imports: [
    ReactiveFormsModule,
    Dialog,
    Button,
    IftaLabel,
    FormsModule,
    InputText,
  ],
  templateUrl: "./project-add-specification-dialog.component.html",
  styleUrl: "./project-add-specification-dialog.component.scss",
  standalone: true,
})
export class ProjectAddSpecificationDialogComponent {
  public readonly data: InputSignal<ProjectAddSpecificationDialogData | undefined | null> = input();
  public visible: ModelSignal<boolean> = model(false);
  public readonly specification: ModelSignal<{ success: boolean, value?: ProjectAddSpecificationRequest }> =
    model(null);

  protected form: FormGroup = new FormGroup({
    code: new FormControl("", { validators: [Validators.required] }),
    title: new FormControl("", { validators: [Validators.required] }),
    description: new FormControl("", { validators: [Validators.required] }),
  });

  public onCancelClick() {
    this.specification.set({
      success: false
    });
    this.visible.set(false);
  }

  public onSubmitClick() {
    if (this.form.valid) {
      this.specification.set({
        success: true,
        value: new ProjectAddSpecificationRequest(
          this.data().projectId,
          this.form.controls["code"].value,
          this.form.controls["title"].value,
          this.form.controls["description"].value,
        )
      });
      this.visible.set(false);
    }
  }
}
