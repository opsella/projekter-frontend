import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: "app-material-edit-form",
    templateUrl: "./material-edit-form.component.html",
    styleUrls: ["./material-edit-form.component.scss"],
    providers: [],
    standalone: false
})
export class MaterialEditFormComponent {
  @Input() public set details(data: any) {}


  constructor() {
  }

  protected onSubmit(form: FormGroup) {
  }
}
