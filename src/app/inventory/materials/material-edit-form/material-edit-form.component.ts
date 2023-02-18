import { Component, Input } from "@angular/core";

@Component({
  selector    : "app-material-edit-form",
  templateUrl : "./material-edit-form.component.html",
  styleUrls   : ["./material-edit-form.component.scss"]
})
export class MaterialEditFormComponent {
  @Input() public details: any;

}
