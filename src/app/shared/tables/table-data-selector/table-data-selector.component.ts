import { Component, Input } from "@angular/core";
import { TableDataSelectorActions } from "./table-data-selector-actions";

@Component({
  selector    : "app-table-data-selector",
  templateUrl : "./table-data-selector.component.html",
  styleUrls   : ["./table-data-selector.component.scss"]
})
export class TableDataSelectorComponent {

  @Input() public actions: TableDataSelectorActions[] = [];

}
