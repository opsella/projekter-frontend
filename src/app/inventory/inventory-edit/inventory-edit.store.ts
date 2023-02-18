import { Equipment } from "../../models/equipment";
import { Material } from "../../models/material";
import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { InventoryDataService, InventoryFilters } from "../inventory-data.service";
import { InventoryTypes } from "../inventory-list/inventory-list.store";
import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";

export interface InventoryEditState {
  inventoryItem: Equipment | Material | null;
  inventoryType: InventoryTypes | "";
  inventoryItemId: string;
  status: "pending" | "loading" | "succeeded" | "failed";
}

@Injectable()
export class InventoryEditStore extends ComponentStore<InventoryEditState> {
  constructor(
    private inventoryDataService: InventoryDataService
  ) {
    super({
      inventoryItem   : {} as Equipment | Material | null,
      inventoryType   : "",
      inventoryItemId : "",
      status          : "pending"
    });
  }

  public readonly getInventoryDetailsForEdit = this.effect<{
    itemId: InventoryFilters;
    type: InventoryTypes;
  }>((
    filters$: Observable<{itemId: InventoryFilters; type: InventoryTypes }>
  ) => {
    return filters$.pipe(
      switchMap(
        (filters) => this.inventoryDataService.inventoryDetailsQuery(filters.itemId, filters.type).pipe(
          tap({
            next: (data) => {
              this.setInventoryDetails(data);
              this.setStatusSucceeded();
            },
            error: () => EMPTY
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  private readonly setInventoryDetails = this.updater((state, value: Equipment | Material) => {
    return {
      ...state,
      inventoryItem: value
    };
  });

  public readonly setInventoryType = this.updater((state, value: InventoryTypes) => {
    return {
      ...state,
      inventoryType: value
    };
  });

  public readonly setInventoryItemId = this.updater((state, value: InventoryTypes) => {
    return {
      ...state,
      inventoryItemId: value
    };
  });

  public readonly isEquipment$ = this.select(
    ({ inventoryType }) => inventoryType === "equipment"
  );

  public readonly isMaterial$ = this.select(
    ({ inventoryType }) => inventoryType === "materials"
  );

  private readonly hasData$ = this.select(
    ({ status }) => status === "succeeded"
  );

  private readonly inventoryItemId$ = this.select(
    ({ inventoryItemId }) => inventoryItemId
  );

  private readonly inventoryItem$ = this.select(
    ({ inventoryItem }) => {
      if (Equipment.isEquipment(inventoryItem)) {
        return inventoryItem as Equipment | null;
      } else if (Material.isMaterial(inventoryItem)) {
        return inventoryItem as Material | null;
      }

      return null;
    }
  );

  private readonly setStatusSucceeded = this.updater((state) => ({
    ...state,
    status: "succeeded"
  }));

  public readonly vm$ = this.select({
    inventoryItem$   : this.inventoryItem$,
    hasData$         : this.hasData$,
    isEquipment$     : this.isEquipment$,
    isMaterial$      : this.isMaterial$,
    inventoryItemId$ : this.inventoryItemId$
  });

}
