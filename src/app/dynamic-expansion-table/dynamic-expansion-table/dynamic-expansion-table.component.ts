import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { ExpansionTableData } from "../expandable-data";
import { CdkTable } from "@angular/cdk/table";

@Component({
  selector    : "app-dynamic-expansion-table",
  templateUrl : "./dynamic-expansion-table.component.html",
  styleUrls   : ["./dynamic-expansion-table.component.scss"],
  animations  : [trigger("detailExpand", [
    state("collapsed", style({ height: "0px", minHeight: "0" })),
    state("expanded", style({ height: "*" })),
    transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
  ]),],
})
export class DynamicExpansionTableComponent implements OnInit {
  // So far as I can tell the ExpandableData<any> in this situation must be marked as type ANY as you cannot convert a type back into an unknown
  // If you know a way to do this please help me remove this any
  @Input() public data: MatTableDataSource<ExpansionTableData<any>> = new MatTableDataSource<ExpansionTableData<any>>([]);
  @ViewChild("table") public cdkTable!: CdkTable<ExpansionTableData<any>>;

  protected expandedElement: null | undefined;
  protected columnHeaders: string[] = [];
  protected columnHeadersWithActions: string[] = [
    ...this.columnHeaders,
    "actions",
    "expand"
  ];

  public ngOnInit(): void {
    this.columnHeaders = [...Object.keys(this.data.data[0].data)];

    this.columnHeadersWithActions = [
      ...this.columnHeaders,
      "actions",
      "expand"
    ];

    this.cdkTable?.renderRows();
  }
}
