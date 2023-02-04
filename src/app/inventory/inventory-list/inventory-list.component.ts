import { Component, OnInit } from "@angular/core";
import { map, Observable } from "rxjs";
import { InventoryDataService } from "../inventory-data.service";
import { TableDataSelectorActions } from "../../shared/tables/table-data-selector/table-data-selector-actions";
import { ExpansionTableData } from "../../shared/tables/expandable-data";
import { InventoryListStore } from "./inventory.store";

export interface InventoryListData {
  id: string;
  name: string;
  code: string;
  description?: string;
  quantity?: number;
  unit?: number;
}

@Component({
  selector    : "app-inventory-list",
  templateUrl : "./inventory-list.component.html",
  styleUrls   : ["./inventory-list.component.scss"],
  providers   : [InventoryListStore]
})
export class InventoryListComponent implements OnInit {
  public inventoryOptions: TableDataSelectorActions[] = [
    {
      title  : "Equipment",
      action : () => this.store.getInventoryTableData({ filters: {}, type: "equipment" })
    },
    {
      title  : "Materials",
      action : () => this.store.getInventoryTableData({ filters: {}, type: "materials" })
    },
  ];

  protected readonly data$: Observable<ExpansionTableData<InventoryListData>[]> = 
    this.store.vm$.pipe(map(vm => vm.inventory$));

  constructor(
    private readonly componentStore: InventoryListStore,
    private inventoryDataService: InventoryDataService,
    private readonly store: InventoryListStore
  ) {
  }

  public ngOnInit() {
    this.store.getInventoryTableData({ filters: {}, type: "equipment" });
  }
}
