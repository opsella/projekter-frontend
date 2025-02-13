import { Component, Input } from "@angular/core";
import { EquipmentEditFormStore } from "./equipment-edit-form.store";
import { FormGroup } from "@angular/forms";

@Component({
    selector: "app-equipment-edit-form",
    templateUrl: "./equipment-edit-form.component.html",
    styleUrls: ["./equipment-edit-form.component.scss"],
    providers: [EquipmentEditFormStore],
    standalone: false
})
export class EquipmentEditFormComponent {
  @Input() public set details(data: any) {
    this.equipmentEditFormStore.setFormData(data);
  }

  protected vm$ = this.equipmentEditFormStore.vm$;

  constructor(
    private equipmentEditFormStore: EquipmentEditFormStore,
  ) {
  }

  protected onSubmit(form: FormGroup) {
    this.equipmentEditFormStore.setStatusLoading();

    const values = { ...form.value };
    this.equipmentEditFormStore.createInventory({ values });
  }
}
