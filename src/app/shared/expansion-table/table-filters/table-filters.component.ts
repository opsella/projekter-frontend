import { Component, Input } from "@angular/core";
import { TableFilterActions } from "./table-filter-actions";

@Component({
  selector    : "app-table-filters",
  templateUrl : "./table-filters.component.html",
  styleUrls   : ["./table-filters.component.scss"]
})
export class TableFiltersComponent {
  @Input() public filters: TableFilterActions[] = [];
}
