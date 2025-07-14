import {Component, inject, input, InputSignal, model, ModelSignal} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Button} from "primeng/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FloatLabel} from "primeng/floatlabel";
import {InputGroup} from "primeng/inputgroup";
import {InputText} from "primeng/inputtext";
import {SignatureComponent} from "../../shared/signature/signature.component";
import {ProjectTaskCompletionRequest, Task} from "../../models/project";
import {ProjectId} from "../../models/ids/project-id";
import {DatePicker} from "primeng/datepicker";
import {AutoFocus} from "primeng/autofocus";

@Component({
  selector: 'app-project-task-completion-dialog',
  imports: [
    Button,
    FloatLabel,
    InputGroup,
    InputText,
    ReactiveFormsModule,
    SignatureComponent,
    DatePicker,
    AutoFocus
  ],
  templateUrl: './project-task-completion-dialog.component.html',
  styleUrl: './project-task-completion-dialog.component.scss'
})
export class ProjectTaskCompletionDialogComponent {
  private ref: DynamicDialogRef = inject(DynamicDialogRef);
  private config: DynamicDialogConfig = inject(DynamicDialogConfig);

  public completionResult: ModelSignal<ProjectTaskCompletionRequest | null> = model(null);
  public projectId: InputSignal<ProjectId> = input.required();
  public task: InputSignal<Task> = input.required();

  public form: FormGroup = new FormGroup({
    name: new FormControl("", { validators: [Validators.required] }),
    completionDate: new FormControl(new Date(), { validators: [Validators.required] }),
    signatureData: new FormControl("", { validators: [Validators.required] })
  });

  protected onDrawComplete(event: string): void {
    this.form.controls['signatureData'].setValue(event);
  }

  public onCancelClick() {
    this.completionResult.set(null);
    this.ref.close(this.completionResult());
  }

  public onSubmitClick() {
    if (this.form.valid) {
      this.completionResult.set(new ProjectTaskCompletionRequest(
        this.projectId(),
        this.task().id,
        this.form.controls["fullname"].value,
        new Date(this.form.controls["completionDate"].value),
        this.form.controls["signatureData"].value,
      ));
      this.ref.close(this.completionResult());
    }
  }
}
