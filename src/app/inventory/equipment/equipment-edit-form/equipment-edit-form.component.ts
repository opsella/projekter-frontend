import { Component, Input, OnInit } from "@angular/core";
import { EquipmentEditFormStore } from "./equipment-edit-form.store";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector    : "app-equipment-edit-form",
  templateUrl : "./equipment-edit-form.component.html",
  styleUrls   : ["./equipment-edit-form.component.scss"],
  providers   : [EquipmentEditFormStore]
})
export class EquipmentEditFormComponent implements OnInit {
  @Input() public details?: any;

  protected equipmentForm!: FormGroup;

  constructor(
    private equipmentEditFormStore: EquipmentEditFormStore,
    private formBuilder: FormBuilder
  ) {
  }

  public ngOnInit() {
    const name = this.details?.name ?? "";
    const code = this.details?.code ?? "";
    const description = this.details?.description ?? "";

    this.equipmentForm = this.formBuilder.group({
      name        : new FormControl( name, [Validators.required]),
      code        : new FormControl(code, Validators.required),
      description : new FormControl(description),
    });
  }

  protected onSubmit(form: FormGroup) {
    const equipment = {
      id: this.details.id,
      ...form.value
    };

    this.equipmentEditFormStore.editEquipment({ equipment });
  }

  protected get name() {
    return this.equipmentForm.get("name");
  }

  protected get code() {
    return this.equipmentForm.get("code");
  }
}
