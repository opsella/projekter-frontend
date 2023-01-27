import { Component } from "@angular/core";
// import { ExpansionTableData } from "../../dynamic-expansion-table/expandable-data";
// import { InventoryExpansionDetailComponent } from "../inventory-expansion-detail/inventory-expansion-detail.component";
// import { TestExpansionComponent } from "../test-expansion/test-expansion.component";
// import { InventoryData } from "../list/list.component";
// import { MatTableDataSource } from "@angular/material/table";
import { InventoryApiService } from "../../services/inventory-api.service";
import { Observable } from "rxjs";
import { Equipment } from "../../equipment/models/equipment";
import { Material } from "../../materials/models/material";

@Component({
  selector    : "app-inventory-list",
  templateUrl : "./inventory-list.component.html",
  styleUrls   : ["./inventory-list.component.scss"]
})
export class InventoryListComponent {
  constructor(
    private inventoryApiService: InventoryApiService
  ) {
  }

  protected data: Observable<Equipment[] | Material[]> = this.inventoryTableQuery("Materials");


  public inventoryTableQuery(type: "Equipment" | "Materials"): Observable<Equipment[] | Material[]> {
    if (type === "Equipment") {
      return this.inventoryApiService.queryEquipment({});
    } else {
      return this.inventoryApiService.queryMaterials({});
    }
  }

  // protected data: MatTableDataSource<ExpansionTableData<InventoryData>> = new MatTableDataSource<ExpansionTableData<InventoryData>>([
  //   {
  //     data: {
  //       name        : "Name: test    1",
  //       code        : "Code: code    1",
  //       quantity    : 1000,
  //       description : "dfas 3333",
  //     },
  //     actions: [
  //       {
  //         title   : "View",
  //         enabled : () => true,
  //         visible : () => true,
  //         action  : () => {  }
  //       },
  //       {
  //         title   : "Edit",
  //         enabled : () => true,
  //         visible : () => true,
  //         action  : () => {  }
  //       }
  //     ],
  //     expansionComponent: InventoryExpansionDetailComponent
  //     // notifications might be something to add as a component
  //   },
  //   {
  //     data: {
  //       name        : "test    2",
  //       code        : "code    2",
  //       quantity    : 2000,
  //       description : "dfas 2222",
  //     },
  //     actions: [
  //       {
  //         title   : "View",
  //         enabled : () => true,
  //         visible : () => true,
  //         action  : () => { }
  //       },
  //       {
  //         title   : "Edit",
  //         enabled : () => true,
  //         visible : () => true,
  //         action  : () => { }
  //       }
  //     ],
  //     expansionComponent: TestExpansionComponent
  //   },
  //   {
  //     data: {
  //       name        : "test    2",
  //       code        : "code    2",
  //       quantity    : 2000,
  //       description : "dfas 2222",
  //     },
  //     actions: [
  //       {
  //         title   : "View",
  //         enabled : () => true,
  //         visible : () => true,
  //         action  : () => { }
  //       },
  //       {
  //         title   : "Edit",
  //         enabled : () => true,
  //         visible : () => true,
  //         action  : () => { }
  //       }
  //     ],
  //     expansionComponent: InventoryExpansionDetailComponent
  //   }
  // ]);
}


