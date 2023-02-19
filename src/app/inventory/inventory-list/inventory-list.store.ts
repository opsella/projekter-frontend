import { ComponentStore } from "@ngrx/component-store";
import { Injectable, Type } from "@angular/core";
import { Equipment } from "../../models/equipment";
import { Material } from "../../models/material";
import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";
import { ExpansionContentData, ExpansionTableData } from "../../shared/expansion-table/expandable-data";
import { InventoryListData } from "./inventory-list.component";
import { InventoryDataService, InventoryFilters } from "../inventory-data.service";
import { EquipmentTableContentComponent } from "../equipment/equipment-table-content/equipment-table-content.component";
import { MaterialsTableContentComponent } from "../materials/materials-table-content/materials-table-content.component";
import { UnreachableException } from "../../shared/exceptions/unreachable-exception";
import { TableFilterActions } from "../../shared/expansion-table/table-filters/table-filter-actions";
import { Router } from "@angular/router";

export interface InventoryListState {
  inventory: Equipment[] | Material[];
  tableFilters: TableFilterActions[];
  status: "pending" | "loading" | "succeeded" | "failed";
}

export type SupportedInventory = Equipment[] | Material[];
export type InventoryTypes = "equipment" | "materials";

@Injectable()
export class InventoryListStore extends ComponentStore<InventoryListState> {
  constructor(
    private inventoryDataService: InventoryDataService,
    private router: Router
  ) {
    super({
      inventory    : [] as SupportedInventory,
      tableFilters : [
        {
          title  : "Equipment",
          action : () => this.getInventoryTableData({ filters: {}, type: "equipment" })
        },
        {
          title  : "Materials",
          action : () => this.getInventoryTableData({ filters: {}, type: "materials" })
        },
      ],
      status: "pending"
    });
  }

  private readonly inventory$ = this.select(state => state.inventory);

  public readonly getInventoryTableData = this.effect<{
    filters: InventoryFilters;
    type: InventoryTypes;
  }>((
    filters$: Observable<{filters: InventoryFilters; type: InventoryTypes }>
  ) => {
    return filters$.pipe(
      switchMap(
        (filters) => this.inventoryDataService.inventoryTableQuery(filters.filters, filters.type).pipe(
          tap({
            next: (data) => {
              this.setInventoryTableData(data);
              this.setStatusSucceeded();
            },
            error: () => EMPTY
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  private readonly setInventoryTableData = this.updater((state, value: SupportedInventory) => ({
    ...state,
    inventory: [ ...value ]
  }));

  private readonly setStatusSucceeded = this.updater((state) => ({
    ...state,
    status: "succeeded"
  }));

  private readonly tableFilters$ = this.select(
    ({ tableFilters }) => tableFilters
  );
  private readonly hasData$ = this.select(
    ({ status }) => status === "succeeded"
  );

  private selectTableData(): Observable<ExpansionTableData<InventoryListData>[]> {
    return this.select(
      this.inventory$,
      (inventory): ExpansionTableData<InventoryListData>[] => {
        return inventory.map(inventoryItem => {
          return {
            data: {
              ...inventoryItem
            },
            actions: [
              {
                title   : "Details",
                enabled : () => true,
                visible : () => true,
                action  : async (row: any) => await this._navRouteAndState(row, inventoryItem, "details")
              },
              {
                title   : "Edit",
                enabled : () => true,
                visible : () => true,
                action  : async (row: any) => await this._navRouteAndState(row, inventoryItem, "edit")
              }
            ],
            expansionComponent: this._expansionComponent(inventoryItem),
          } as ExpansionTableData<InventoryListData>;
        });
      }
    );
  }

  public readonly vm$ = this.select({
    inventory$    : this.selectTableData(),
    hasData$      : this.hasData$,
    tableFilters$ : this.tableFilters$
  });

  private _expansionComponent(data: Equipment | Material): Type<ExpansionContentData> {
    if (data instanceof Equipment) {
      return EquipmentTableContentComponent;
    } else if (data instanceof Material) {
      return MaterialsTableContentComponent;
    } else {
      throw new UnreachableException();
    }
  }

  private async _navRouteAndState(row: any, data: Equipment | Material, path: string): Promise<void> {
    const type = Material.isMaterial(data) ? "materials" : "equipment";
    await this.router.navigateByUrl(`inventory/${path}/${row.data.name.toLowerCase()}`, { state: { itemId: row.data.id, type } });
  }
}
