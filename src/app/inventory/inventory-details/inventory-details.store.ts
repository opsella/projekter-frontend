import { ComponentStore } from "@ngrx/component-store";
import { InventoryDataService, InventoryFilters } from "../inventory-data.service";
import { Equipment } from "../../models/equipment";
import { Material } from "../../models/material";
import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { InventoryTypes } from "../inventory-list/inventory-list.store";

export interface InventoryDetailsState {
  inventoryDetails: Equipment | Material | null;
  status: "pending" | "loading" | "succeeded" | "failed";
}

@Injectable()
export class InventoryDetailsStore extends ComponentStore<InventoryDetailsState> {
  constructor(
    private inventoryDataService: InventoryDataService
  ) {
    super({
      inventoryDetails : {} as Equipment | Material,
      status           : "pending"
    });
  }

  public readonly getInventoryDetails = this.effect<{
    filters: InventoryFilters;
    type: InventoryTypes;
  }>((
    filters$: Observable<{filters: InventoryFilters; type: InventoryTypes }>
  ) => {
    return filters$.pipe(
      switchMap(
        (filters) => this.inventoryDataService.inventoryDetailsQuery(filters.filters, filters.type).pipe(
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
      inventoryDetails: value
    };
  });

  private readonly setStatusSucceeded = this.updater((state) => ({
    ...state,
    status: "succeeded"
  }));

  public readonly vm$ = this.select(
    this.state$,
    (state) => ({
      inventoryDetails: state.inventoryDetails
    })
  );
}
