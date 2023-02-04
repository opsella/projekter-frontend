import { ComponentStore } from "@ngrx/component-store";
import { Injectable, Type } from "@angular/core";
import { Equipment } from "../../equipment/models/equipment";
import { Material } from "../../materials/models/material";
import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";
import { EquipmentDataService } from "../../equipment/equipment-data.service";
import { ExpansionContentData, ExpansionTableData } from "../../shared/tables/expandable-data";
import { InventoryListData } from "./inventory-list.component";
import { InventoryDataService, InventoryFilters } from "../inventory-data.service";
import { EquipmentTableContentComponent } from "../equipment-table-content/equipment-table-content.component";
import { MaterialsTableContentComponent } from "../materials-table-content/materials-table-content.component";
import { UnreachableException } from "../../shared/exceptions/unreachable-exception";

export interface InventoryState {
  inventory: Equipment[] | Material[];
  status: "pending" | "loading" | "succeeded" | "failed";
}

export type SupportedInventory = Equipment[] | Material[];
export type InventoryTypes = "equipment" | "materials";

@Injectable()
export class InventoryListStore extends ComponentStore<InventoryState> {
  constructor(
    private equipmentService: EquipmentDataService,
    private inventoryDataService: InventoryDataService,
  ) {
    super({
      inventory : [] as SupportedInventory,
      status    : "pending"
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
            next  : (equipment) => this.setInventoryTableData(equipment),
            error : () => EMPTY
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

  private selectTableData(): Observable<ExpansionTableData<InventoryListData>[]> {
    return this.select(
      this.inventory$,
      (inventory): ExpansionTableData<InventoryListData>[] => {
        return inventory.map(data => {
          return {
            data: {
              id          : data.id,
              code        : data.code,
              name        : data.name,
              description : data?.description,
              quantity    : this.isMaterial(data) ? data.quantity : null,
              unit        : this.isMaterial(data) ? data.quantity : null,
            },
            expansionComponent: this._expansionComponent(data),
          } as ExpansionTableData<InventoryListData>;
        });
      }
    );
  }

  public readonly vm$ = this.select({
    inventory$: this.selectTableData()
  });

  // TODO: This should probably be on the `Material
  private isMaterial(value: Equipment | Material): value is Material {
    return value instanceof Material;
  }

  private _expansionComponent(data: Equipment | Material): Type<ExpansionContentData> {
    if (data instanceof Equipment) {
      return EquipmentTableContentComponent;
    } else if (data instanceof Material) {
      return MaterialsTableContentComponent;
    } else {
      throw new UnreachableException();
    }
  }
}
