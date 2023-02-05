import { Component, OnInit } from "@angular/core";
import { InventoryDataService } from "../inventory-data.service";
import { TableFilterActions } from "../../shared/expansion-table/table-filters/table-filter-actions";
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
  public inventoryOptions: TableFilterActions[] = [
    {
      title  : "Equipment",
      action : () => this.store.getInventoryTableData({ filters: {}, type: "equipment" })
    },
    {
      title  : "Materials",
      action : () => this.store.getInventoryTableData({ filters: {}, type: "materials" })
    },
  ];

  // protected readonly data$: Observable<ExpansionTableData<InventoryListData>[]> =
  //   this.store.vm$.pipe(map(vm => {
  //     console.log(" vm inventory ", vm.inventory$);
  //     return vm.inventory$;
  //   }));

  public readonly vm$ = this.store.vm$;

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
