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
  @Input() public id!: string;
  @Input() public details: any;

  // public readonly vm$ = this.equipmentEditFormStore.vm$;
  protected equipmentForm!: FormGroup;

  constructor(
    private equipmentEditFormStore: EquipmentEditFormStore,
    private formBuilder: FormBuilder
  ) {
  }

  public ngOnInit() {
    this.equipmentForm = this.formBuilder.group({
      name        : new FormControl(this.details.name, [Validators.required]),
      code        : new FormControl(this.details.code, Validators.required),
      description : new FormControl(this.details?.description),
    });
  }

  protected onSubmit(form: FormGroup) {
    console.log("FORM ON SUBMMIT ", form.value);
    const equipment = {
      id: this.id,
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
