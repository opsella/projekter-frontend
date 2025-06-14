import { Component, Input } from "@angular/core";
import { TableFilterActions } from "./table-filter-actions";
import { NgFor } from "@angular/common";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "app-table-filters",
  templateUrl: "./table-filters.component.html",
  styleUrls: ["./table-filters.component.scss"],
  imports: [NgFor, MatButton],
  standalone: true,
})
export class TableFiltersComponent {
  @Input() public filters: TableFilterActions[] = [];
}
