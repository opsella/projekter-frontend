import { Component, Input } from "@angular/core";
import { InventoryData } from "../list/list.component";
import { ExpansionTableContentComponent } from "../../dynamic-expansion-table/expandable-data";

@Component({
  selector    : "app-inventory-expansion-detail",
  templateUrl : "./inventory-expansion-detail.component.html",
  styleUrls   : ["./inventory-expansion-detail.component.scss"]
})
export class InventoryExpansionDetailComponent implements ExpansionTableContentComponent {
  @Input() public data?: InventoryData;
}
