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

  protected expandedElements: any[] = [];

  constructor(
    private router: Router,
    private expansionTableStore: ExpansionTableStore
  ) {
  }

  public readonly vm$ = this.expansionTableStore.vm$;

  protected updateExpandedElements(element: any) {
    this.elementIsExpanded(element)
      ? this.expandedElements = this.expandedElements.filter(elementId => elementId !== element.data.id)
      : this.expandedElements.push(element.data.id);
  }

  protected elementIsExpanded(element: any) {
    return this.expandedElements.includes(element.data.id);
  }

  protected elementTransitionStage(element: any) {
    return this.elementIsExpanded(element) ? "expanded" : "collapsed";
  }
}
