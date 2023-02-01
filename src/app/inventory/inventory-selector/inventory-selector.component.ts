import { Component, Input } from "@angular/core";
import { InventoryOptions } from "../inventory-list/inventory-list.component";

@Component({
  selector    : "app-inventory-selector",
  templateUrl : "./inventory-selector.component.html",
  styleUrls   : ["./inventory-selector.component.scss"]
})
export class InventorySelectorComponent {

  @Input() public options: InventoryOptions[] = [];

}
