import { Component, Input, OnInit } from "@angular/core";
import { TableFilterActions } from "./table-filter-actions";

@Component({
  selector    : "app-table-filters",
  templateUrl : "./table-filters.component.html",
  styleUrls   : ["./table-filters.component.scss"]
})
export class TableFiltersComponent implements OnInit {
  @Input() public filters: TableFilterActions[] = [];
  protected activeFilter = "";

  public ngOnInit() {
    this.activeFilter = this.filters[0].title;
  }

  protected isActive(title: string) {
    return this.activeFilter === title;
  }

  protected handleClick(filter: TableFilterActions) {
    this.activeFilter = filter.title;
    filter.action();
  }
}
