import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { CdkTable } from "@angular/cdk/table";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { ExpansionTableData2 } from "../expandable-data";

@Component({
  selector    : "app-expansion-table",
  templateUrl : "./expansion-table.component.html",
  styleUrls   : ["./expansion-table.component.scss"],
  animations  : [trigger("detailExpand", [
    state("collapsed", style({ height: "0px", minHeight: "0" })),
    state("expanded", style({ height: "*" })),
    transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
  ]),],
})
export class ExpansionTableComponent implements OnInit {
  // So far as I can tell the ExpandableData<any> in this situation must be marked as type ANY as you cannot convert a type back into an unknown
  // If you know a way to do this please help me remove this any
  @Input() public data: MatTableDataSource<ExpansionTableData2> = new MatTableDataSource<ExpansionTableData2>([]);
  @ViewChild("table") public cdkTable!: CdkTable<ExpansionTableData2>;

  protected expandedElement: null | undefined;
  protected columnHeaders: string[] = [];
  protected columnHeadersWithActions: string[] = [
    ...this.columnHeaders,
    "actions",
    "expand"
  ];

  constructor(
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.columnHeaders = [...Object.keys(this.data)];

    this.columnHeadersWithActions = [
      ...this.columnHeaders,
      "actions",
      "expand"
    ];

    this.cdkTable?.renderRows();
  }

  protected async viewItem(item: { name: string; code: string; id: any }) {
    await this.router.navigateByUrl(
      `inventory/details/${item.name.toLowerCase()}`, { state: { itemId: item.id } }
    );
  }
}
