import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: "app-equipment-edit-form",
    templateUrl: "./equipment-edit-form.component.html",
    styleUrls: ["./equipment-edit-form.component.scss"],
    providers: [],
    standalone: false
})
export class EquipmentEditFormComponent {
  @Input() public set details(data: any) {
  }

  constructor() {
  }

  protected onSubmit(form: FormGroup) {
  }
}
