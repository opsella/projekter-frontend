import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MaterialEditFormStore } from "./material-edit-form.store";

@Component({
  selector    : "app-material-edit-form",
  templateUrl : "./material-edit-form.component.html",
  styleUrls   : ["./material-edit-form.component.scss"],
  providers   : [MaterialEditFormStore]
})
export class MaterialEditFormComponent {
  @Input() public set details(data: any) {
    this.materialEditFormStore.setFormData(data);
  }

  protected vm$ = this.materialEditFormStore.vm$;

  constructor(
    private materialEditFormStore: MaterialEditFormStore,
  ) {
  }

  protected onSubmit(form: FormGroup) {
    this.materialEditFormStore.setStatusLoading();

    const values = { ...form.value };
    this.materialEditFormStore.createInventory({ values });
  }
}
