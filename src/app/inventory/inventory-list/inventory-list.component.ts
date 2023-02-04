import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Equipment } from "../../equipment/models/equipment";
import { Material } from "../../materials/models/material";
import { InventoryDataService } from "../inventory-data.service";
import { Store } from "@ngrx/store";
import { selectEquipmentFromInventory } from "../../state/equipment/equipment.selectors";
import { searchEquipment } from "../../state/equipment/equipment.actions";
import { TableDataSelectorActions } from "../../shared/tables/table-data-selector/table-data-selector-actions";
import { MatTableDataSource } from "@angular/material/table";
import { ExpansionTableData2 } from "../../shared/tables/expandable-data";

@Component({
  selector    : "app-inventory-list",
  templateUrl : "./inventory-list.component.html",
  styleUrls   : ["./inventory-list.component.scss"]
})
export class InventoryListComponent {
  public inventoryOptions: TableDataSelectorActions[] = [
    {
      title  : "Equipment",
      action : () => this.updateTableData("Equipment")
    },
    {
      title  : "Materials",
      action : () => this.updateTableData("Materials")
    },
    {
      title  : "Supplies",
      action : () => this.updateTableData("Supplies")
    }
  ];
  protected data$: Observable<MatTableDataSource<ExpansionTableData2>> | undefined = this.store.select(selectEquipmentFromInventory);

  constructor(
    private inventoryDataService: InventoryDataService,
    private readonly store: Store
  ) {
    // Default to equipment data
    this.store.dispatch(searchEquipment({}));
  }


  protected async updateTableData(dataType: string): Promise<void> {
    // Will need to get basic data for "collapsed" views (e.g. Name, Code, Description, etc)
    // this.data$ = await this.inventoryDataService.inventoryTableQuery(dataType);

    // Then this data will need to be converted to the proper structure for the table
    // Similar to the chunk of "tempData" below
  }

  // protected tempData: MatTableDataSource<ExpansionTableData<any>> = new MatTableDataSource<ExpansionTableData<any>>([
  //   {
  //     data: {
  //       id          : "123123123123",
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
  //     expansionComponent: ExpansionDetailComponent
  //     // notifications might be something to add as a component
  //   },
  //   {
  //     data: {
  //       id          : "123123123123",
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
  //     expansionComponent: ExpansionDetailComponent
  //   },
  //   {
  //     data: {
  //       id          : "123123123123",
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
  //     expansionComponent: ExpansionDetailComponent
  //   }
  // ]);
}


export type InventoryItem = Equipment | Material;
