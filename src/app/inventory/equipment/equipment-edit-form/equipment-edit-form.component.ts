import { Component, Input } from "@angular/core";
import { EquipmentEditFormStore } from "./equipment-edit-form.store";
import { FormBuilder } from "@angular/forms";

@Component({
  selector    : "app-equipment-edit-form",
  templateUrl : "./equipment-edit-form.component.html",
  styleUrls   : ["./equipment-edit-form.component.scss"],
  providers   : [EquipmentEditFormStore]
})
export class EquipmentEditFormComponent {
  @Input() public set equipmentId(id: string) {
    // this.equipmentEditFormStore.getFormData({ equipmentId: id });
  }

  public readonly vm$ = this.equipmentEditFormStore.vm$;

  constructor(
    private equipmentEditFormStore: EquipmentEditFormStore,
    private fb: FormBuilder
  ) {
  }
}
