import { Component, Input } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector    : "app-list",
  templateUrl : "./list.component.html",
  styleUrls   : ["./list.component.scss"],
  animations  : [trigger("detailExpand", [
    state("collapsed", style({ height: "0px", minHeight: "0" })),
    state("expanded", style({ height: "*" })),
    transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
  ]),],
})
export class ListComponent {
  @Input() public data: MatTableDataSource<{ name: string; code: string; quantity: number; description: string }> = new MatTableDataSource([
    {
      name        : "test    1",
      code        : "code    1",
      quantity    : 1000,
      description : "dfas 3333"
    },
    {
      name        : "test    2",
      code        : "code    2",
      quantity    : 2000,
      description : "dfas 2222"
    },
    {
      name        : "test    3",
      code        : "code    3",
      quantity    : 3000,
      description : "dfas 1111"
    }
  ]);

  protected expandedElement: null | undefined;

  protected columnHeaders: string[] = [
    "name", "code", "quantity", "description"
  ];

  protected columnHeadersWithActions: string[] = [
    ...this.columnHeaders,
    "actions",
    "expand"
  ];

  protected columnHeadersWithExpandedDetail: string[] = [
    ...this.columnHeadersWithActions,
    "expandedDetail"
  ];

}

// export interface ViewableOnCollapsed {
//
// }
