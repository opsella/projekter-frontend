import { Component } from "@angular/core";
import { ExpansionContentData } from "../../shared/expansion-table/expandable-data";
import { InventoryListData } from "../inventory-list/inventory-list.component";

@Component({
  selector    : "app-expansion-detail",
  templateUrl : "./expansion-detail.component.html",
  styleUrls   : ["./expansion-detail.component.scss"]
})
export class ExpansionDetailComponent implements ExpansionContentData {
  public data?: InventoryListData;
}
