import { Component } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { MatTableDataSource } from "@angular/material/table";
import { ExpandableData } from "../../dynamic-expansion-table/expandable-data";
import { InventoryExpansionDetailComponent } from "../inventory-expansion-detail/inventory-expansion-detail.component";
import { TestExpansionComponent } from "../test-expansion/test-expansion.component";

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
  protected data: MatTableDataSource<ExpandableData<InventoryData>> = new MatTableDataSource<ExpandableData<InventoryData>>([
    {
      data: {
        name        : "test    1",
        code        : "code    1",
        quantity    : 1000,
        description : "dfas 3333",
      },
      expansionComponent: InventoryExpansionDetailComponent
    },
    {
      data: {
        name        : "test    2",
        code        : "code    2",
        quantity    : 2000,
        description : "dfas 2222",
      },
      expansionComponent: TestExpansionComponent
    },
    {
      data: {
        name        : "test    2",
        code        : "code    2",
        quantity    : 2000,
        description : "dfas 2222",
      },
      expansionComponent: InventoryExpansionDetailComponent
    }
  ]);
}

export interface InventoryData {
  name: string;
  code: string;
  quantity: number;
  description: string;
}
