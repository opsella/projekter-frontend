import { Component, Input, ViewChild } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { CdkTable } from "@angular/cdk/table";
import { Router } from "@angular/router";
import { ExpandableData } from "../expandable-data";
import { TableFilterActions } from "../table-filters/table-filter-actions";
import { ExpansionTableStore } from "../expansion-table.store";

@Component({
  selector    : "app-expansion-table",
  templateUrl : "./expansion-table.component.html",
  styleUrls   : ["./expansion-table.component.scss"],
  animations  : [trigger("detailExpand", [
    state("collapsed", style({ height: "0px", minHeight: "0" })),
    state("expanded", style({ height: "*" })),
    transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
  ]),],
  providers: [ExpansionTableStore]
})
export class ExpansionTableComponent {
  @Input() public set data(data: ExpandableData<unknown>[]) {
    this.expansionTableStore.setTableData(data);
  }

  @Input() public set filters(filters: TableFilterActions[]) {
    this.expansionTableStore.setFilters(filters);
  }

  @ViewChild("table") public cdkTable!: CdkTable<ExpandableData<unknown>>;

  protected expandedElement: null | undefined;

  constructor(
    private router: Router,
    private expansionTableStore: ExpansionTableStore
  ) {
  }

  public readonly vm$ = this.expansionTableStore.vm$;

  protected async viewItem(row: any) {
    await this.router.navigateByUrl(
      `inventory/details/${row.data.name.toLowerCase()}`, { state: { itemId: row.data.id } }
    );
  }

  protected async editItem(row: any) {
    // await this.router.navigateByUrl(
    //   `inventory/edit/${row.data.name.toLowerCase()}`, { state: { itemId: row.data.id } }
    // );
  }
}
