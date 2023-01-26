import { Component, Input } from "@angular/core";
import { ExpansionTableContentComponent } from "../../dynamic-expansion-table/expandable-data";
import { InventoryData } from "../list/list.component";

@Component({
  selector    : "app-test-expansion",
  templateUrl : "./test-expansion.component.html",
  styleUrls   : ["./test-expansion.component.scss"]
})
export class TestExpansionComponent implements ExpansionTableContentComponent {
  @Input() public data?: InventoryData;
}
